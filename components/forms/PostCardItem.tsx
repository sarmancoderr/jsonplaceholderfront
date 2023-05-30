import { Post, User } from "@/types"
import { http } from "@/utils/axios"
import { Button, Card , CardActions, CardContent, Typography} from "@mui/material"
import Link from "next/link"
import { useEffect, useState } from "react"
import AuthorChip from "../AuthorChip"

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
                {user && <AuthorChip author={user} />}
            </Typography>
            </CardContent>
            <CardActions>
                <Button disableElevation href={'/posts/' + post.id} LinkComponent={Link} variant="contained">
                    Ir al post
                </Button>
            </CardActions>
        </Card>
    )
}