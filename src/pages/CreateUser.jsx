import { Box, Button, TextField, Typography } from "@mui/material";

const CreateUser = () => {

    const handleSubmit = () => {
        console.log("User creating");
    }
    return (
        <Box sx={{ m: 2 }}>
            <Typography variant="h5">Create User</Typography>
            <br />
            <form className="border border-teal-700 rounded-lg p-4">
                <TextField
                    fullWidth
                    label="Name"
                    variant="standard"
                    type="text"
                />
                <br />
                <br />
                <TextField
                    fullWidth
                    label="E-mail"
                    variant="standard"
                    type="text"
                />
                <br />
                <br />
                <TextField
                    fullWidth
                    label="Password"
                    variant="standard"
                    type="password"
                />
                <div className='flex justify-center mt-4'>
                    <Button variant="contained" color='primary' onClick={handleSubmit}>Create User</Button>
                </div>
            </form>
        </Box>
    )
}

export default CreateUser;