import { useContext } from 'react';
import { GuestsContext } from '../contexts/GuestsContext';
import { Typography, Box } from '@mui/material';
import { Invited } from './data';

export default function Totals() {
    const { guests }: any = useContext(GuestsContext); // error!
    return (
        <div>
            <Box>
                <Typography sx={{ color: '#bbb' }} mt={3} align="center" variant="subtitle1">
                    {guests.length} invited
                </Typography>
                <Typography sx={{ color: '#bbb' }} mb={2} align="center" variant="subtitle1">
                    {guests.filter((item: Invited) => item.status === 'responded').length} rsvped
                </Typography>
            </Box>
        </div>
    );
}
