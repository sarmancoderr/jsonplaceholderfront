import { User } from "@/types";
import { Avatar, Chip } from "@mui/material";

interface AuthorChipProps {
    author: User
}

export default function AuthorChip ({author}: AuthorChipProps) {
    return (
        <Chip label={author.name} avatar={<Avatar src={`https://gravatar.com/avatar/${author.email}?d=identicon`} />} />
    )
}