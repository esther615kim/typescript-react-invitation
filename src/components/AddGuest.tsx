import React, { useState } from 'react';
import '../styled.css';
import { Invited as AddedGuest } from './data'; // import interface
import { Modal, IconButton, TextField, Button, Box, RadioGroup, Radio, FormControlLabel } from '@mui/material';
import { AddCircleOutline, PersonAdd } from '@mui/icons-material/';

export default function AddGuest() {
    const [input, setInput] = useState({
        gender: '',
        name: '',
        note: '',
        url: '',
        email: '',
        status: 'invited',
    });
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
        e.preventDefault();
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const handleClick = (): void => {
        // input value => guests로 추가하는 함수임 prerequisite: contextAPI에서 guests,setGuests 설정
        console.log('added');
        // if(!input.name||)
    };

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
                        {/* how to add value in radioGroup? */}
                        <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                            <FormControlLabel value="male" control={<Radio />} label="male" />
                            <FormControlLabel value="female" control={<Radio />} label="female" />
                        </RadioGroup>
                        {/* DRY? */}
                        <TextField onChange={handleChange} required value={input.name} label="name" variant="standard" />
                        <TextField onChange={handleChange} required value={input.email} label="email" variant="standard" />
                        <TextField onChange={handleChange} value={input.url} label="image" variant="standard" />
                        <TextField onChange={handleChange} value={input.note} label="memo" variant="standard" />
                        <Button sx={{ margin: 2 }} fullWidth onClick={handleClick}>
                            Add
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}

// sx={{ fontSize: 45, color: '#bbb' }}
