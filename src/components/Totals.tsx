import { useContext } from 'react';
import { GuestsContext } from '../contexts/GuestsContext';
import { Typography, Box } from '@mui/material';
import { Invited } from './data';

export default function Totals() {
    const { guests }: Array<Invited> = useContext(GuestsContext); // error
    return (
        <div>
            <Box>
                <Typography sx={{ color: '#bbb' }} mt={3} align="center" variant="subtitle1">
                    {guests.length} invited
                </Typography>
                <Typography sx={{ color: '#bbb' }} mb={2} align="center" variant="subtitle1">
                    7 rsvped
                </Typography>
            </Box>
        </div>
    );
}
