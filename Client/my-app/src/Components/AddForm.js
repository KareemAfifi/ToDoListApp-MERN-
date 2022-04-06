import React from 'react'

import { Box } from '@mui/system'
//import { TextField } from '@mui/material'

import isWeekend from 'date-fns/isWeekend';
import  TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import { Stack } from '@mui/material';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import { Button } from '@mui/material';

const AddForm = ({addtask}) => {
    const [deadline, setdeadline] = React.useState(new Date());
    const [title, settitle] = React.useState('');
    const [description, setdescription] = React.useState('');
    const [flag,setflag]=React.useState(false)
    const handleChange = (newValue) => {
      var dateObj = new Date();
      var month = dateObj.getUTCMonth() + 1; //months from 1-12
      var day = dateObj.getUTCDate();
      var year = dateObj.getUTCFullYear();
        setdeadline( year + "/" + month + "/" + day);
      };
    
 

  return (
    <div >
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 2, width: '40ch' },
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
      }}
      noValidate
      autoComplete="off"
         >
                <div>
                    <TextField
                    required
                    id="outlined-required"
                    label="Title"
                    defaultValue=" "
                    onChange={(e)=>{settitle(e.target.value)}}  
                    />
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <Stack spacing={3}>
                            <DesktopDatePicker
                            label="Date desktop"
                            inputFormat="MM/dd/yyyy"
                            value={deadline}
                            onChange={handleChange}
                            renderInput={(params) => <TextField {...params} />}
                            />
                        </Stack>
                     </LocalizationProvider>
                     <TextField
                      id="outlined-multiline-static"
                      label="Description"
                      multiline
                      rows={4}
                      defaultValue=" "
                      onChange={(e)=>{setdescription(e.target.value)}}  
                    />
        
                </div>
                <Button variant="outlined" onClick={()=>{addtask({title,description,deadline })} }  >Add It !</Button>
      </Box>
    </div>
    
  )
}

export default AddForm
