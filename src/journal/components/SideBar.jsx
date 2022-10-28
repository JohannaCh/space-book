import { TurnedInNot} from "@mui/icons-material";
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"



export const SideBar = ({drawerWidth = 240}) => {
  return (
    <Box
        component='nav'
        sx={{width:{sm: drawerWidth}, flexShrink:{sm:0}}}
    >
        <Drawer
            variant='permanent'
            open
            sx={{
                display:{xs:'block'},
                '& .MuiDrawer-paper': {boxSizing:'border-box', width:drawerWidth}
            }}
        >
        
            <Toolbar>
               <Typography variant='h6' component='div' margin='auto'>
                    Note Space
               </Typography>
            </Toolbar>
            <Divider/>

            <List>
                {
                    ['enero','febrero','marzo','abril','mayo'].map(text =>(
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon sx={{color:'primary.main'}}>
                                    <TurnedInNot/>
                                </ListItemIcon>

                                <Grid container>
                                    <ListItemText primary={text} sx={{color:'primary.main', textTransform:'capitalize'}}/>
                                    <ListItemText secondary={'sint sint magna enim consequat tempor ad aute esse.'}/>
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>

        </Drawer>
    </Box>
  )
}
