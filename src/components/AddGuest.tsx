import React, { useState, useContext } from 'react';
import { GuestsContext } from '../contexts/GuestsContext';
import { Invited } from './data';
import { Modal, IconButton, TextField, Button, Box, RadioGroup, Radio, FormControlLabel } from '@mui/material';
import { AddCircleOutline, PersonAdd } from '@mui/icons-material/';
import '../styled.css';

export interface IGuest {
    guests: Invited[];
    setGuests: React.Dispatch<React.SetStateAction<Invited[]>>;
}

export default function AddGuest() {
    // existing guest list
    const { guests, setGuests } = useContext(GuestsContext);
    // new guest
    const [input, setInput] = useState({
        title: '',
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
        if (!input.name || !input.email) return;
        setGuests([...guests, { title: input.title, name: input.name, url: input.url, note: input.note, email: input.email, status: input.status }]);
        // console.log('new list', guests);
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
                        <RadioGroup row aria-label="gender">
                            <FormControlLabel value="male" control={<Radio />} label="male" />
                            <FormControlLabel value="female" control={<Radio />} label="female" />
                        </RadioGroup>
                        {/* refactor-- DRY */}
                        <TextField name="title" required onChange={handleChange} value={input.title} label="title" variant="standard" />
                        <TextField name="name" required onChange={handleChange} value={input.name} label="name" variant="standard" />
                        <TextField name="url" onChange={handleChange} value={input.url} label="image" variant="standard" />
                        <TextField name="email" onChange={handleChange} required value={input.email} label="email" variant="standard" />
                        <TextField name="note" onChange={handleChange} value={input.note} label="memo" variant="standard" />
                        <TextField name="status" onChange={handleChange} required value={input.status} label="status" variant="standard" />
                        <Button sx={{ margin: 2 }} fullWidth onClick={handleClick}>
                            {input.email?"Done":"Add"}
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}

// used https://www.oxfordmail.co.uk/resources/images/12873858.jpg?display=1&htype=0&type=responsive-gallery

// { person }: { person: Invited } =""