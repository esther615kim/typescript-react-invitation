import React, { useState} from 'react';
import { useContext } from 'react';
import { GuestsContext } from '../contexts/GuestsContext';
import { Typography, Box, Stack, Modal} from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Totals from './Totals';
import { Invited } from './data';
import GuestInfo from './GuestInfo';

const responsive = {
    desktop: {
        breakpoint: { max: 2400, min: 765 },
        items: 3,
    },
    mobile: {
        breakpoint: { max: 765, min: 0 },
        items: 2,
    },
};

export default function CardList() {
    const { guests }: any = useContext(GuestsContext);
    // useEffect() =>guests

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
            {/* guest-list */}
            <Carousel autoPlay={true} responsive={responsive}>
                {guests.map((person: Invited) => {
                    return (
                        <GuestInfo person={person}/>
                    );
                })}
            </Carousel>
            <Totals />
        </div>
    );
}