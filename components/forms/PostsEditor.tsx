import { Button, Card, CardContent, Grid, TextField, Typography } from "@mui/material";

export default function PostsEditor () {
    return (
        <Card elevation={0} component={'form'}>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h5">Editor de posts</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Título del post" fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Cuerpo del post" fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" disableElevation>Guardar</Button>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}