import  React,{memo} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SwitchAccount=({changeAccount,switchName})=> {
    
  return (
    <Box sx={{ minWidth: 120 ,height:'50px',margin:'10px 0'}} size="small">
      <FormControl fullWidth>
        <InputLabel >Switch</InputLabel>
        <Select
          value={switchName}
          label="Switch"
          onChange={(e)=>changeAccount(e)}
        >
          <MenuItem value={'Tony'}>Tony</MenuItem>
          <MenuItem value={'Mr.Wick'}>Mr.Wick</MenuItem>
          <MenuItem value={'Stark'}>Stark</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
export default memo(SwitchAccount)