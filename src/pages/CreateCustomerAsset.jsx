import { Box, Button, TextField, Typography } from "@mui/material";

const CreateCustomerAsset = () => {

    const handleSubmit = () => {
        console.log("User creating");
    }
    return (
        <Box sx={{ m: 2 }}>
            <Typography variant="h5">Create Customer Asset</Typography>
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
                    label="Asset Type"
                    variant="standard"
                    type="text"
                    helperText="Generator, PFI etc."
                />
                <br />
                <br />
                <TextField
                    fullWidth
                    label="Asset Manufacturer"
                    variant="standard"
                    type="text"
                    helperText="Waukesha"
                />
                <br />
                <br />
                <TextField
                    fullWidth
                    label="Asset Model"
                    variant="standard"
                    type="text"
                    helperText="Waukesha"
                />
                <br />
                <br />
                <TextField
                    fullWidth
                    label="Asset Capacity"
                    variant="standard"
                    type="text"
                    helperText="100 KVA etc."
                />
                <br />
                <br />
                <TextField
                    fullWidth
                    label="Customer Asset Id"
                    variant="standard"
                    type="text"
                    helperText="Burimari Bazar - Gen/1"
                />
                <br />
                <br />
                <TextField
                    fullWidth
                    label="Manufacturer Asset Id"
                    variant="standard"
                    type="text"
                    helperText="ID Provided by the Manufacturer"
                />
                <br />
                <br />
                <TextField
                    fullWidth
                    label="Asset Installed by"
                    variant="standard"
                    type="text"
                    helperText="Who installed"
                />
                <div className='flex justify-center mt-4'>
                    <Button variant="contained" color='primary' onClick={handleSubmit}>Create Customer Asset</Button>
                </div>
            </form>
        </Box>
    )
}

export default CreateCustomerAsset;