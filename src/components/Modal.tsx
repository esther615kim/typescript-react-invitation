import React from 'react';
import { Box, IconButton, Stack, Typography, Card, CardMedia } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { Invited } from './data';

export default function ModalInfo({ person }: { person: Invited }): JSX.Element {
    // 1.delete onClick-delete guest func
    // 2.edit
    return (
        <div>
            <Box sx={{p:5}}>
                {/* <Box className="profile-box"> */}
               <Stack spacing={0.5} direction="row"pb={1}>
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
                <Stack direction="row" justifyContent="flex-end" spacing={0.5}>
                    
                    <IconButton aria-label="delete">
                        <Edit />
                    </IconButton>
                    <IconButton aria-label="edit">
                        <Delete />
                    </IconButton>
                </Stack>
            </Box>
        </div>
    );
}
