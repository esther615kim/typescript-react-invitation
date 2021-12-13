import React from 'react';
import '../styled.css';
import { Modal, IconButton, TextField, Button, Box, RadioGroup, Radio, FormControlLabel } from '@mui/material';
import { AddCircleOutline, PersonAdd } from '@mui/icons-material/';

export default function AddGuest() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            {/* button */}
            <IconButton className="add-guest" sx={{ marginTop: '4rem' }}>
                <AddCircleOutline onClick={handleOpen} sx={{ fontSize: 45, color: '#bbb' }} />
            </IconButton>

            {/* modal */}
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box className="modal">
                    <Box id="modal-modal-description" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <PersonAdd sx={{ fontSize: 45, color: '#bbb', pb: 2 }} />

                        <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                            <FormControlLabel value="male" control={<Radio />} label="male" />
                            <FormControlLabel value="female" control={<Radio />} label="female" />
                        </RadioGroup>
                        <TextField required id="standard-required" label="name" variant="standard" />
                        <TextField required id="standard-required" label="email" variant="standard" />
                        <TextField id="standard-required" label="image" variant="standard" />
                        <TextField id="standard-required" label="memo" variant="standard" />
                        <Button sx={{ margin: 2 }} fullWidth>
                            Add
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}

// sx={{ fontSize: 45, color: '#bbb' }}
