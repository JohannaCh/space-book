import {Button, Grid, Link, TextField, Typography} from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { Link as RouterLink } from "react-router-dom";
import GoogleIcon from '@mui/icons-material/Google';

export const RegisterPage = () => {
  return (
    <AuthLayout title='Crear cuenta'>
      <form>
        <Grid container>
          <Grid item sx={{width:'100%', mt:1}}> 
            <TextField 
              fullWidth
              label='Correo' 
              type='email' 
              placeholder='correo@correo.com'
            />
          </Grid>

          <Grid item sx={{width:'100%', mt:3}}> 
            <TextField 
              fullWidth
              label='Contraseña' 
              type='password' 
              placeholder='contraseña'
            />
          </Grid>

          <Grid container spacing={2} sx={{ mt:2 }} >
            <Grid item sx={{width:'100%'}}>
              <Button variant='contained' fullWidth>Registrarse</Button>
            </Grid>

          </Grid>

          <Grid container direction='row' justifyContent='end' sx={{mt:2}}>
            <Link component={RouterLink} color='inherit' to='/auth/login' underline='none'>
              ¿Ya tenés una cuenta? Inicia sesión
            </Link>
          </Grid>    

        </Grid>
      </form>
    </AuthLayout>
  )
};