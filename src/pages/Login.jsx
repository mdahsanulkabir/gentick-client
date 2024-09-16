import { Button, FormLabel, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate('/home')
    }
    return (
        <div 
            className="grid items-center min-h-screen login"
            // style={{
            //     backgroundImage: `url('http://hexagonep.com/wp-content/uploads/2022/03/HEXAGON-Logo-PNG-100x100.png')`,
            //     backgroundRepeat: 'no-repeat',
            //     backgroundPosition: 'center',
            //     WebkitBackgroundSize: '400px',
            // }}
        >
            <div className="absolute top-12 w-full text-center">
                <Typography variant='h3'>GenTick</Typography>
            </div>
            <form className="justify-self-center w-80 rounded-xl shadow-2xl flex flex-col p-8">
                <FormLabel className="text-center"><Typography variant='h4'>Login</Typography></FormLabel>
                <section className="my-4">
                    <div>
                        <TextField
                            fullWidth
                            label="E-mail"
                            variant="standard"
                        />
                        <br />
                        <br />
                        <TextField
                            fullWidth
                            label="Password"
                            variant="standard"
                        />
                    </div>
                </section>
                    <div className='flex justify-center'>
                        <Button variant="contained" color='primary' onClick={handleSubmit}>Go Home</Button>
                    </div>
            </form>
        </div>
    )
}

export default Login;