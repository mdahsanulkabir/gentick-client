import { Box, Button, TextField, Typography } from "@mui/material";

const CreateCustomerAssetLocation = () => {

    const handleSubmit = () => {
        console.log("User creating");
    }
    return (
        <Box sx={{ m: 2 }}>
            <Typography variant="h5">Create Customer Asset Location</Typography>
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
                    label=" Asset Location Name"
                    variant="standard"
                    type="text"
                    helperText="ie, Branch Name"
                />
                <br />
                <br />
                <TextField
                    fullWidth
                    label="District"
                    variant="standard"
                    type="text"
                    helperText="Dinajpur"
                />
                <br />
                <br />
                <TextField
                    fullWidth
                    label="Local Name"
                    variant="standard"
                    type="text"
                    helperText="Name by locale"
                />
                <br />
                <br />
                <TextField
                    fullWidth
                    label="Contact Person"
                    variant="standard"
                    type="text"
                    helperText="Auto complete - only customer associated names"
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
                    <Button variant="contained" color='primary' onClick={handleSubmit}>Create Customer <br /> Asset Location</Button>
                </div>
            </form>
        </Box>
    )
}

export default CreateCustomerAssetLocation;