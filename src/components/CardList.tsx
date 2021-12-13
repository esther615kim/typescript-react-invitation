import { Card, Typography, Box, Stack, Chip, Avatar } from '@mui/material';
export default function CardList() {
    return (
        <div className="card-list">
            <Card sx={{ m: 2, p: 2 }}>
                <Box className="profile-box">
                    <Stack direction="row" spacing={2}>
                        <Avatar
                            alt="chuchu"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp8GSq_y-2Cr5j_6srGAfnGOTF4a6dEQHwQzIALkjY0earyawWrNx3fnIF7hGH17Fu2LE&usqp=CAU"
                        />
                        <div>
                            <Chip label="invited" />
                            <Chip color="success" label="rsvped" />
                        </div>
                    </Stack>
                </Box>
                <Typography variant="h6">Mr. Chuchu</Typography>
                <Typography variant="subtitle2" gutterBottom>
                    chuchu8@gmail.meow
                </Typography>
                <Typography variant="caption">always hungry</Typography>
            </Card>
        </div>
    );
}
