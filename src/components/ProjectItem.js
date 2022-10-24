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
  width: 400,
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


function ProjectItem({ image, name, id, skills}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Image style={{width: `250px`, borderRadius: `10px`}} src={image} onClick={handleOpen}/>
      <Button style={{fontSize: `15px`, color:`#3e497a`, position:`center`}} onClick={handleOpen}>{name}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={getModalStyle()}
      >
        <Box sx={style}>
        <Image  src={image} />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {skills}
          </Typography>
        </Box>
      </Modal>
    </div>
    
  );
}

export default ProjectItem;
