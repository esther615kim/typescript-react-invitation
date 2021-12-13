import { Typography, Box } from '@mui/material';

export default function Totals() {
    return (
        <div>
            <Box>
                <Typography sx={{ color: '#bbb' }} mt={3} align="center" variant="subtitle1">
                    13 invited
                </Typography>
                <Typography sx={{ color: '#bbb' }} mb={2} align="center" variant="subtitle1">
                    7 rsvped
                </Typography>
            </Box>
        </div>
    );
}
