import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Card, Typography, Box, Stack, Avatar } from '@mui/material';
import { GUESTS } from './data';

const responsive = {
    desktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 2000, min: 765 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 765, min: 0 },
        items: 2,
    },
};

export default function CardList() {
    console.log(GUESTS);
    return (
        <div className="card-list">
            <Stack direction="row" spacing={1}>
                <Typography className="chip invited" variant="subtitle1">
                    #invited
                </Typography>
                <Typography className="chip rsvp" variant="subtitle1">
                    #rsvp
                </Typography>
            </Stack>

            <Carousel showDots={true} responsive={responsive}>
                {GUESTS.map((person) => {
                    return (
                        <Card sx={{ m: 2, p: 2, width: '160px' }}>
                            <Box className="profile-box">
                                <Avatar alt={person.name} src={person.url} />
                                <Stack direction="row">
                                    <Typography className="chip" variant="caption">
                                        {/* 아래 조건문으로 바꾸기 */}
                                        {person.status[0]}
                                    </Typography>
                                    <Typography className="chip rsvp" variant="caption">
                                        {person.status[1]}
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
        </div>
    );
}
