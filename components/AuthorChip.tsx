import { User } from "@/types";
import { Avatar, Chip } from "@mui/material";
import { useRouter } from "next/navigation";

interface AuthorChipProps {
    author: User
}

export default function AuthorChip ({author}: AuthorChipProps) {
    const router = useRouter()
    const avatar = <Avatar src={`https://gravatar.com/avatar/${author.email}?d=identicon`} />
    return (
        <Chip label={author.name} avatar={avatar} clickable onClick={() => router.push('/users/' + author.id)} />
    )
}