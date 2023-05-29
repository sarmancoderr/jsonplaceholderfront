import { Comment } from "@/types"

import NextImage from 'next/image'

import Avatar from '@mui/material/Avatar'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'

interface PostCommentProps {
    comment: Comment
}

export default function PostComment ({comment}: PostCommentProps) {
    const gravatarImage = `https://gravatar.com/avatar/${comment.email}?d=identicon`;

    return <ListItem>
        <ListItemAvatar>
            <Avatar src={gravatarImage} />
        </ListItemAvatar>
        <ListItemText primary={comment.body} secondary={comment.email} />
    </ListItem>
}