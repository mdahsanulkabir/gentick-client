import { Box, Button, TextField, Typography } from "@mui/material";

const CreateTicket = () => {

    const handleSubmit = () => {
        console.log("User creating");
    }
    return (
        <Box sx={{ m: 2 }}>
            <Typography variant="h5">Create Ticket</Typography>
            <br />
            <form className="border border-teal-700 rounded-lg p-4">
                <TextField
                    fullWidth
                    label="Customer Name"
                    variant="standard"
                    type="text"
                    helperText="Auto generated if anyone from customer is opening the ticket and disabled"
                />
                <br />
                <br />
                <TextField
                    fullWidth
                    label="Location Name"
                    variant="standard"
                    type="text"
                    helperText="for customer contact, can select the location. For location user, auto complete and disabled"
                />
                <br />
                <br />
                <TextField
                    fullWidth
                    label="Customer Asset Id"
                    variant="standard"
                    type="text"
                />
                <br />
                <br />
                <TextField
                    fullWidth
                    label="Problem Description"
                    variant="standard"
                    type="text"
                />
                <br />
                <br />
                <div className='flex justify-center mt-4'>
                    <Button variant="contained" color='primary' onClick={handleSubmit}>Create Ticket</Button>
                </div>
            </form>
        </Box>
    )
}

export default CreateTicket;