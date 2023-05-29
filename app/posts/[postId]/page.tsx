"use client"

import { Comment, Post } from "@/types"
import { http } from "@/utils/axios"
import { Paper, Typography } from "@mui/material"
import { useEffect, useState } from "react"


import List from '@mui/material/List'
import PostComment from "@/components/PostComment"


export default function PostShow({ params }: any) {
    const [post, setPost] = useState<Post | null>(null)
    const [comments, setComents] = useState<Comment[]>([])

    useEffect(() => {
        (async () => {
            const post = await http.get('/posts/' + params.postId)
            const comments = await http.get('/comments/', {
                params: { postId: params.postId }
            })
            setComents(comments.data)
            setPost(post.data)
        })()
    }, [])

    if (!post) {
        return <p>Cargando</p>
    }

    return (
        <Paper elevation={0}>
            <Typography variant="h5">{post.title}</Typography>
            <p>{post.body}</p>
            <Paper sx={{ marginTop: '10px' }}>
                <Typography variant="h5">Comentarios</Typography>
                <List>
                    {comments.map(c => {
                        return <PostComment comment={c} key={c.id} />
                    })}
                </List>
            </Paper>
        </Paper>
    )
}