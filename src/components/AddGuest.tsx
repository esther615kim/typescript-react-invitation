import React from 'react';
import '../styled.css';
import { Modal, IconButton, Typography, Box } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export default function AddGuest() {
    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        borderRadius: 5,
        boxShadow: 20,
        p: 4,
    };
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            {/* button */}
            <IconButton className="add-guest" sx={{ marginTop: '4rem' }}>
                <AddCircleOutlineIcon onClick={handleOpen} sx={{ fontSize: 45, color: '#bbb' }} />
            </IconButton>

            {/* modal */}
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box className="modal">
                    <Typography id="modal-modal-title" variant="h6">
                        Add Guest
                    </Typography>

                    <Box id="modal-modal-description" sx={{ mt: 2 }}>
                        <Typography>details to be updated.</Typography>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}

// sx={{ fontSize: 45, color: '#bbb' }}
