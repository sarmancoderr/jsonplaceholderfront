import { Photo } from "@/types";
import { http } from "@/utils/axios";
import { Box, Card, CardContent, CardHeader } from "@mui/material";
import { useEffect, useState } from "react";
import Image from 'next/image'

interface AlbumModalProps {
    albumId: number
}

export default function AlbumModal({albumId}: AlbumModalProps) {
    const [photos, setPhotos] = useState<Photo[]>([])

    useEffect(() => {(async () => {
        const photosRequest = await http.get('/photos?albumId=' + albumId)
        setPhotos(photosRequest.data)
    })()}, [])

    return (
        <Card>
            <CardHeader title="Viendo un álbum" />
            <CardContent>
                <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1}}>
                    {photos.map(p => (
                        <Image src={p.thumbnailUrl} width={250} height={250} alt="photo" key={p.id} />
                    ))}
                </Box>
            </CardContent>
        </Card>
    )
}