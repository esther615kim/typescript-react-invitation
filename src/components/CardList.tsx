import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Card, Typography, Box, Stack, Modal, Avatar } from '@mui/material';
import { GUESTS, Invited } from './data';
import Totals from './Totals';

const responsive = {
    desktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 2400, min: 765 },
        items: 3,
    },
    mobile: {
        breakpoint: { max: 765, min: 0 },
        items: 2,
    },
};

export default function CardList() {
    const [open, setOpen] = useState<boolean>(false);
    const handleOpen = (): void => setOpen(true);
    const handleClose = (): void => setOpen(false);
    return (
        <div className="card-list">
            {/* status */}
            <Stack direction="row" spacing={1}>
                <Typography className="chip invited" variant="subtitle2">
                    #invited
                </Typography>
                <Typography className="chip responded" variant="subtitle2">
                    #responded
                </Typography>
            </Stack>
            {/* modal */}
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title">
                <Box className="modal">
                    <Box id="modal-modal-title" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <h3>to-be-updated</h3>
                    </Box>
                </Box>
            </Modal>
            {/* guest-list */}
            <Carousel autoPlay={true} responsive={responsive}>
                {GUESTS.map((person: Invited) => {
                    return (
                        <Card onClick={handleOpen} sx={{ m: 2, p: 2, width: '200px' }}>
                            <Box className="profile-box">
                                <Avatar alt={person.name} src={person.url} />
                                <Stack direction="row">
                                    <Typography className="chip" variant="caption">
                                        {/* 아래 조건문으로 바꾸기 */}
                                        {person.status}
                                    </Typography>
                                    <Typography className="chip responded" variant="caption">
                                        wishlist
                                    </Typography>
                                </Stack>
                            </Box>
                            <Typography variant="h6">
                                {person.title}
                                {person.name}
                            </Typography>
                            <Typography variant="subtitle2" gutterBottom>
                                {person.email}
                            </Typography>
                            <Typography variant="caption">{person.note}</Typography>
                        </Card>
                    );
                })}
            </Carousel>
            <Totals />
        </div>
    );
}

{
    /* modal */
}
