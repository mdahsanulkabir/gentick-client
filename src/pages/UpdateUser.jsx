import { Box, RadioGroup, Button, FormControl, FormControlLabel, FormLabel, Radio, TextField, Typography, Autocomplete, Checkbox } from "@mui/material";
import { districtsOfBangladesh } from "../data/districts";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { customers } from "../data/customers";
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const UpdateUser = () => {

    const handleSubmit = () => {
        console.log("User creating");
    }
    return (
        <Box sx={{ m: 2 }}>
            <Typography variant="h5">Update User</Typography>
            <br />
            <form className="border border-teal-700 rounded-lg p-4">
                <TextField
                    fullWidth
                    label="User Id"
                    variant="standard"
                    type="text"
                />
                <br />
                <br />
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
                <FormControl>
                    <FormLabel id="user-type-radio-buttons-group-label">User Type</FormLabel>
                    <RadioGroup
                        row
                        name="user-type-radio-buttons-group"
                    >
                        <FormControlLabel value="customer" control={<Radio />} label="Customer" />
                        <FormControlLabel value="hexagon" control={<Radio />} label="Hexagon" />
                    </RadioGroup>
                </FormControl>
                <br />
                <div className="bg-violet-200 rounded p-2">
                    <FormControl>
                        <FormLabel id="user-type-radio-buttons-group-label">User Type: Customer</FormLabel>
                        <br />
                        <Autocomplete
                            disablePortal
                            options={customers}
                            getOptionLabel={(option) => option.title}
                            defaultValue={customers[3]}
                            sx={{ width: 300 }}
                            renderOption={(props, option) => {
                                const { key, ...optionProps } = props;
                                return (
                                    <li key={key} {...optionProps}>
                                        
                                        {option.title}
                                    </li>
                                );
                            }}
                            renderInput={(params) => <TextField {...params} label="Select Customer" />}
                        />
                        <br />
                        <p>Scope</p>
                        <RadioGroup
                            row
                            name="user-type-radio-buttons-group"
                        >
                            <FormControlLabel value="country" control={<Radio />} label="Country" />
                            <FormControlLabel value="location" control={<Radio />} label="Location" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <br />
                <div className="bg-purple-200 rounded p-2">
                    <FormControl>
                        <FormLabel id="user-type-radio-buttons-group-label">User Type: Hexagon</FormLabel>
                        <RadioGroup
                            row
                            name="user-type-radio-buttons-group"
                        >
                            <FormControlLabel value="director" control={<Radio />} label="Director" />
                            <FormControlLabel value="manager" control={<Radio />} label="Manager" />
                            <FormControlLabel value="technician" control={<Radio />} label="Technician" />
                        </RadioGroup>
                    </FormControl>
                    <br />
                    <br />
                    <Autocomplete
                        multiple
                        id="checkboxes-tags-demo"
                        options={districtsOfBangladesh}
                        disableCloseOnSelect
                        getOptionLabel={(option) => option.title}
                        defaultValue={[districtsOfBangladesh[13]]}
                        renderOption={(props, option, { selected }) => {
                            const { key, ...optionProps } = props;
                            return (
                                <li key={key} {...optionProps}>
                                    <Checkbox
                                        icon={icon}
                                        checkedIcon={checkedIcon}
                                        style={{ marginRight: 8 }}
                                        checked={selected}
                                    />
                                    {option.title}
                                </li>
                            );
                        }}
                        style={{ width: 500 }}
                        renderInput={(params) => (
                            <TextField {...params} label="Technicians Default Scope" placeholder="Districts Coverage" />
                        )}
                    />
                </div>
                <div className='flex justify-center mt-4'>
                    <Button variant="contained" color='primary' onClick={handleSubmit}>Update User</Button>
                </div>
            </form>
        </Box>
    )
}

export default UpdateUser;