import Drawer from '@mui/material/Drawer';
import { useState } from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';


export default function AnchorTemporaryDrawer() {
 const [open, setOpen] = useState(false)
  

  return (
    <div>
      
          <IconButton onClick={()=>setOpen(true)}> 
          <MenuRoundedIcon className='link'/>
          </IconButton>
          <Drawer
            anchor={"right"}
            open={open}
            onClose={()=>setOpen(false)}
          >
             <div className='drawer-div'>
        <Link to="/"><p className='link'>Home</p></Link>
        <Link to="/compare"><p className='link'>Compare</p></Link>
        <Link to="/News"><p className='link'>News</p></Link>
        <Link to="/WatchList"><p className='link'>WatchList</p></Link>
        <Link to="/Dashboard"><p className='link'>Dashboard</p></Link>
      </div>
          </Drawer>


    </div>
  );
}