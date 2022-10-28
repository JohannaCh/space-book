import {Button, Grid, Link, TextField, Typography} from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { Link as RouterLink } from "react-router-dom";
import GoogleIcon from '@mui/icons-material/Google';

export const LoginPage = () => {
  return (
    <AuthLayout title='Iniciar sesión'>
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
            <Grid item sx={{width:'100%'}} sm={6} xs={12}>
              <Button variant='contained' fullWidth>Login</Button>
            </Grid>

            <Grid item sx={{width:'100%'}} sm={6} xs={12}>
              <Button variant='contained' fullWidth>
                <GoogleIcon sx={{mr:1}}/>
                Google
              </Button>
            </Grid>

          </Grid>

          <Grid container direction='row' justifyContent='end' sx={{mt:2}}>
            <Link component={RouterLink} color='inherit' to='/auth/register' underline='none'>
              Crear una cuenta
            </Link>
          </Grid>    

        </Grid>
      </form>
    </AuthLayout>
  )
};