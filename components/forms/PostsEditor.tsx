import { http } from "@/utils/axios";
import { Button, Card, CardContent, Grid, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";

interface PostsEditorProps {
    onPostCreated: (post: any) => any
    onClose: () => void
}

export default function PostsEditor ({onPostCreated, onClose}: PostsEditorProps) {
    const formik = useFormik({
        initialValues: {title: '', body: ''},
        onSubmit: async (values, {setSubmitting}) => {
            setSubmitting(true)
            console.log(values)
            const result = await http.post('/posts', {
                ...values,
                userId: 1
            })
            console.log(result.data)
            onPostCreated(result.data)
            onClose()
            setSubmitting(false)
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <Card elevation={0} component={'form'}>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h5">Editor de posts</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField name="title" onChange={formik.handleChange} label="Título del post" fullWidth />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField name="body" onChange={formik.handleChange} label="Cuerpo del post" fullWidth />
                        </Grid>
                        <Grid item xs={12}>
                            <Button type="submit" variant="contained" disableElevation>Guardar</Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </form>
    )
}