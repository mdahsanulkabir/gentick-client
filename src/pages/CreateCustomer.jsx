import { Box, Button, TextField, Typography } from "@mui/material";

const CreateCustomer = () => {

    const handleSubmit = () => {
        console.log("User creating");
    }
    return (
        <Box sx={{ m: 2 }}>
            <Typography variant="h5">Create Customer</Typography>
            <br />
            <form className="border border-teal-700 rounded-lg p-4">
                <TextField
                    fullWidth
                    label=" Customer Name"
                    variant="standard"
                    type="text"
                />
                <br />
                <br />
                <TextField
                    fullWidth
                    label=" Customer Code/ID"
                    variant="standard"
                    type="text"
                />
                <br />
                <br />
                <TextField
                    fullWidth
                    label="Address"
                    variant="standard"
                    type="text"
                />
                <br />
                <br />
                <TextField
                    fullWidth
                    label="Contact Person"
                    variant="standard"
                    type="text"
                />
                <br />
                <br />
                <TextField
                    fullWidth
                    label="Contact Number"
                    variant="standard"
                    type="phone"
                />
                <div className='flex justify-center mt-4'>
                    <Button variant="contained" color='primary' onClick={handleSubmit}>Create Customer</Button>
                </div>
            </form>
        </Box>
    )
}

export default CreateCustomer;