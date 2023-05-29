"use client"

import PaginatedData from "@/components/PaginatedData";
import { http } from "@/utils/axios";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState<any[]>([])

  const retrievePosts = async () => {
    const postsRequest = await http.get('/posts')
    setPosts(postsRequest.data)
  }

  useEffect(() => { retrievePosts() }, [])

  return (
    <>
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
    </>
  )
}
