import { Post, User } from "@/types"
import { http } from "@/utils/axios"
import { Card , CardContent, Typography} from "@mui/material"
import { useEffect, useState } from "react"

interface PostCardItemProps {
    post: Post
}

export default function PostCardItem ({post}: PostCardItemProps) {
    const [user, setUser] = useState<User | null>(null)

    const retrieveUser = async () => {
        const userRequest = await http.get('/users/' + post.userId)

        setUser(userRequest.data)
    }

    useEffect(() => {retrieveUser()}, [])

    return (
        <Card>
            <CardContent>
            <Typography variant="h5" component="div">
                {post.title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {user ? user.name : post.userId}
            </Typography>
            </CardContent>
        </Card>
    )
}