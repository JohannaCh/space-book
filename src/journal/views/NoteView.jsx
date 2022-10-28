import { SaveOutlined } from '@mui/icons-material';
import {Button, Grid, TextField, Typography} from '@mui/material'
import { ImageGallery } from '../components';
import { IconButton } from '@mui/material';

export const NoteView = ({drawerWidth = 240}) => {
  return (
    <Grid container direction='column'alignItems='start' sx={{ mb:1, minWidth:`calc(100vw - ${drawerWidth}px)`, minHeight:'calc(100vh - 90px)', padding:4}}>
        <Grid container direction='row' justifyContent='space-between'>
            <Grid item>
                <Typography fontSize={30} fontWeight='light'>29 de Octubre, 2022</Typography>
            </Grid>
            <Grid item>
                <Button  sx={{backgroundColor:'primary.main', color:'secondary.main'}}>
                    <SaveOutlined sx={{mr:1, fontSize:30}}/>
                    Guardar
                </Button>
                <IconButton>
                <SaveOutlined sx={{mr:1, fontSize:30}}/>
                </IconButton>
            </Grid>
        </Grid>

        <Grid container sx={{width:'100%', mt:2}}>
            <TextField
                type='text'
                variant='filled'
                color='primary'
                fullWidth
                placeholder='Ingrese un título'
                label='Título'
                sx={{border:'none', mb:1, backgroundColor:'secondary.main'}}  
            />
            <TextField
                type='text'
                variant='filled'
                color='primary'
                fullWidth
                multiline
                placeholder='¿Que sucedió en el día de hoy?'
                sx={{border:'none', mt:2, backgroundColor:'secondary.main'}} 
                minRows={5} 
            />
        </Grid>

        <ImageGallery/>

    </Grid>
  )
};
