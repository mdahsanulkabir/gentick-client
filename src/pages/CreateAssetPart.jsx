import { Box, Button, TextField, Typography } from "@mui/material";

const CreateAssetPart = () => {

    const handleSubmit = () => {
        console.log("User creating");
    }
    return (
        <Box sx={{ m: 2 }}>
            <Typography variant="h5">Create Asset Part</Typography>
            <br />
            <form className="border border-teal-700 rounded-lg p-4">
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
                    label="Part Name"
                    variant="standard"
                    type="text"
                    helperText="Injector, Air filter"
                />
                <br />
                <br />
                <TextField
                    fullWidth
                    label="Part Id"
                    variant="standard"
                    type="text"
                    helperText="ID Provided by the Manufacturer"
                />
                <div className='flex justify-center mt-4'>
                    <Button variant="contained" color='primary' onClick={handleSubmit}>Create Asset Part</Button>
                </div>
            </form>
        </Box>
    )
}

export default CreateAssetPart;