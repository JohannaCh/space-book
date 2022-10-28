import { Grid, Typography } from '@mui/material';
import {RocketLaunchOutlined} from '@mui/icons-material';

export const NothingSelectedView = ({drawerWidth = 240}) => {
  return (
    <Grid 
    container
    spacing={0}
    direction='column'
    alignItems='center'
    justifyContent='center'
    sx={{minHeight:'calc(100vh - 65px)', minWidth:`calc(100vw - ${drawerWidth}px)`,backgroundColor:'secondary.main', padding:4}}
    > 
        <Grid item xs={12} sx={{alignItems:'center'}}>
            <RocketLaunchOutlined sx={{fontSize:100, color:'primary.main'}}/>
        </Grid>
        <Grid item xs={12} sx={{alignItems:'center'}}>
            <Typography color='primary.main' variant='h5'  fontWeight='bold'>Selecciona o crea una nota</Typography>
        </Grid>
    </Grid>
  )
};
