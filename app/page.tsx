"use client"

import PaginatedData from "@/components/PaginatedData";
import { http } from "@/utils/axios";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState<any[]>([])

  const retrievePosts = async () => {
    const postsRequest = await http.get('/posts')
    setPosts(postsRequest.data)
  }

  useEffect(() => {retrievePosts()}, [])

  return (
    <>
      <PaginatedData data={posts} ItemRender={({item}) => (
        <>
          <article>
            <Typography>{item.title}</Typography>
          </article>
        </>
      )} />
    </>
  )
}
