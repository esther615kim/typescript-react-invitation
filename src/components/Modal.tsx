import { useContext, useState } from 'react';
import { GuestsContext } from '../contexts/GuestsContext';
import { Box, IconButton, Stack, Typography, CardMedia } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { Invited } from './data';
import { IGuest } from './AddGuest';

export default function ModalInfo({ person }: { person: Invited }): JSX.Element {
    // const [open, setOpen] = useState(true);
    const { guests, setGuests } = useContext(GuestsContext);

    const handleClickDelete = (): void => {
     // firstly tried using event obj but TS didn't like my codes
        console.log(person.email);
        const updatedGuest = guests.filter((guest) => guest.email !== person.email);
        setGuests([...updatedGuest]);
    };
    // 2.edit
    const handleClickEdit = () => {};
    return (
        <div>
            <Box className="guestCard" sx={{ p: 5 }}>
                {/* <Box className="profile-box"> */}
                <Stack spacing={0.5} direction="row" pb={1}>
                    <Typography className="chip" variant="caption">
                        {person.status}
                    </Typography>
                    <Typography className="chip responded" variant="caption">
                        {person.status === 'responded' ? 'YES' : 'awaiting'}
                    </Typography>
                </Stack>
                <CardMedia component="img" width="180" height="160" image={person.url} alt={person.name} />
                <Typography pt={1} variant="h5">
                    {person.title}.{person.name}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    {person.email}
                </Typography>
                <Typography variant="caption">{person.note}</Typography>
                <Stack direction="row" sx={{ position: 'absolute', right: 10, bottom: 10 }}>
                    <IconButton onClick={handleClickEdit} aria-label="edit">
                        <Edit />
                    </IconButton>

                    <IconButton color="primary" onClick={handleClickDelete} aria-label="delete">
                        <Delete />
                    </IconButton>
                </Stack>
            </Box>
        </div>
    );
}
//e: React.ChangeEvent<HTMLInputElement>
