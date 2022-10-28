import { IconButton } from '@mui/material';
import { JournalLayout } from "../../auth/layout/JournalLayout";
import { NothingSelectedView, NoteView } from "../views";
import { AddOutlined, SaveOutlined } from '@mui/icons-material';


export const JournalPage = () => {
  return (
    <JournalLayout>

      <>
        <NothingSelectedView />
        {/* <NoteView/> */}
        <IconButton
          size='large'
          sx={{
            color:'primary.main',
            backgroundColor:'tertiary.main',
            ':hover':{backgroundColor:'tertiary.main', opacity:0.9},
            position:'fixed',
            right:50,
            bottom:50
          }}
        >
          <AddOutlined sx={{fontSize:30}}/>
        </IconButton>
      </>
    
    </JournalLayout>
  )
};


