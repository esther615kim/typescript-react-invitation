import React, { useState } from 'react';
import { Card, Modal, Typography, Box, Stack, Avatar } from '@mui/material';
import { Invited } from './data';
import ModalInfo from './Modal';

export default function GuestInfo({ person }: { person: Invited }): JSX.Element {
    const [open, setOpen] = useState(false);
    const handleOpen = (): void => {
        setOpen(true);
    }
    const handleClose = (): void => setOpen(false);


    return (
        <div>
            {/* modal */}
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title">
                <Box className="modal">
                    <ModalInfo person={person}/>
                </Box>
            </Modal>
            {/* guest card */}
            <Card onClick={handleOpen} sx={{ m: 2, p: 2}}>
                <Box className="profile-box">
                    <Avatar alt={person.name} src={person.url} />
                    <Stack direction="row" >
                        <Typography className="chip" variant="caption" sx={{fontFamily:"Poppins, sans-serif"}}>
                            {person.status}
                        </Typography>
                        <Typography sx={{fontFamily:"Poppins, sans-serif"}}className="chip responded" variant="caption">
                            {person.status === 'responded' ? 'YES' : 'awaiting'}
                        </Typography>
                    </Stack>
                </Box>
                <Typography variant="h6">
                    {person.title}.{person.name}
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                    {person.email}
                </Typography>
                <Typography variant="caption">{person.note}</Typography>
            </Card>
        </div>
    );
}
