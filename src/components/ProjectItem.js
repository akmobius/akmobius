import * as React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import Image from "material-ui-image";

const style = {
  top: '105%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  position:'absolute',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',

    boxShadow: '0px 3px 15px rgba(0, 0, 0, 0.2)',
};

function getModalStyle() {

  return {
      overflow: "scroll"
  };
}


function ProjectItem({ image, name, id, skills, extraImage}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <div>
        <Image style={{width: `250px`, borderRadius: `10px`}} src={image} onClick={handleOpen}/>
        <Button style={{fontSize: `16px`, color:`#3e497a`, marginLeft:'10px'}} onClick={handleOpen}>{name}</Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={getModalStyle()}
      >
        <Box sx={style}>
        <Image  style={{height:'10px', borderRadius: `10px`}} src={image} />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {skills}
          </Typography>
          <img style={{width:'70%', height:'70%',marginLeft:'60px', marginTop:'20px'}} src={extraImage} />
        </Box>
      </Modal>
    </div>
    
  );
}

export default ProjectItem;
