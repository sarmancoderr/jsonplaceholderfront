import { Button, Card, CardContent, Grid, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";

export default function PostsEditor () {
    const formik = useFormik({
        initialValues: {title: '', body: ''},
        onSubmit: (values, {setSubmitting}) => {
            setSubmitting(true)
            console.log(values)
            setSubmitting(false)
        }
    })

    return (
        <Card elevation={0} component={'form'} onSubmit={formik.handleSubmit}>
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
    )
}