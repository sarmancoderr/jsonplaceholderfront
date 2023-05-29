"use client"

import ModalActivator from "@/components/ModalActivator";
import PaginatedData from "@/components/PaginatedData";
import PostsEditor from "@/components/forms/PostsEditor";
import { http } from "@/utils/axios";
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState<any[]>([])

  const retrievePosts = async () => {
    const postsRequest = await http.get('/posts')
    setPosts(postsRequest.data)
  }

  useEffect(() => { retrievePosts() }, [])

  return (
    <section>
      <header style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <Typography variant="h3">Listado de artículos</Typography>
        <ModalActivator Activator={(props) => (<Button {...props} variant={'contained'}>Añadir artículo</Button>)} Content={({handleClose}) => {
          return <PostsEditor
            onClose={handleClose}
            onPostCreated={post => setPosts([...posts, post])}
          />
        }} />
      </header>
      <PaginatedData data={posts} Render={({ items }) => {
        return (
          <Grid container spacing={2}>
            {items.map((item: any) => (
              <Grid key={item.id} xs={12} item>
                <Card>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {item.title}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {item.userId}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )
      }}
      />
    </section>
  )
}
