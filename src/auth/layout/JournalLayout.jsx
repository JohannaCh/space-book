import { NavBar, SideBar} from '../../journal/components/index';
import { Toolbar } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const drawerWidth = 240;

export const JournalLayout = ({children}) => {
  return (
    <Box sx={{ display:'flex'}}>

        <NavBar drawerWidth={drawerWidth}/>

        <SideBar drawerWidth={drawerWidth}/>

        <Box
            component='main' 
            sx={{ flexGrow:1}}>
            
            <Toolbar/>
            {React.cloneElement(children, {drawerWidth})}
        </Box>
    </Box>
  )
};
