"use client"

import AlbumModal from "@/components/AlbumModal";
import AuthorChip from "@/components/AuthorChip";
import ModalActivator from "@/components/ModalActivator";
import { Album, Todo, User } from "@/types";
import { http } from "@/utils/axios";
import { Accordion, AccordionDetails, AccordionSummary, Box, Card, CardContent, CardHeader, Chip, List, ListItem, ListItemText, Paper, Table, TableCell, TableRow } from "@mui/material";
import { useEffect, useState } from "react";

export default function UserPage ({params}: any) {
    console.log(params)
    const [user, setUser] = useState<User | null>(null)
    const [todos, setTodos] = useState<Todo[]>([])
    const [albums, setAlbums] = useState<Album[]>([])

    useEffect(() => {(async () => {
        const userRequest = await http.get('/users/' + params.userId)
        const todosRequest = await http.get('/todos?userId=' + params.userId)
        const albumsRequest = await http.get('/albums?userId=' + params.userId)
        setUser(userRequest.data)
        setTodos(todosRequest.data)
        setAlbums(albumsRequest.data)
    })()}, [])

    if (!user) return <p>Cargando...</p>
    
    return (
        <Paper>
            <Card>
                <CardHeader title={
                    <AuthorChip author={user} />
                } />
                <CardContent>
                    <Box sx={{marginBottom: '50px'}}>
                        <Table>
                            <TableRow>
                                <TableCell>Nombre de usuario</TableCell>
                                <TableCell>{user.username}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Email</TableCell>
                                <TableCell>{user.email}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Dirección</TableCell>
                                <TableCell>{user.address.city} {user.address.street} {user.address.suite} ({user.address.zipcode})</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Teléfono</TableCell>
                                <TableCell>{user.phone}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Sitio web</TableCell>
                                <TableCell>{user.website}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Compañía</TableCell>
                                <TableCell>{user.company.name}</TableCell>
                            </TableRow>
                        </Table>
                    </Box>
                    <Accordion>
                        <AccordionSummary>Todos</AccordionSummary>
                        <AccordionDetails>
                            <List>
                                {todos.map(t => <ListItem key={t.id}>
                                    <ListItemText primary={t.title} secondary={t.completed ? 'Completado' : 'Not completed'} />
                                </ListItem>)}
                            </List>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary>Albumes</AccordionSummary>
                        <AccordionDetails>
                            <Box sx={{display: 'flex', overflow: 'auto', flexWrap: 'wrap'}}>
                                {albums.map(t => <ModalActivator key={t.id}
                                    Activator={(props) => <Chip {...props} sx={{margin: '10px'}} clickable key={t.id} label={t.title} />} 
                                    Content={() => (<AlbumModal albumId={t.id} />)} />)}
                            </Box>
                        </AccordionDetails>
                    </Accordion>
                </CardContent>
            </Card>
        </Paper>
    )
}