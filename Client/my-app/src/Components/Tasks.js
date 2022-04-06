import * as React from 'react';

import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import {FaTimes} from 'react-icons/fa'
import { flexbox } from '@mui/system';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Grid  } from '@mui/material';

import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {Box} from '@mui/material';

const Tasks = ({list,deletefunc}) => {
    const [expanded, setExpanded] = React.useState(false);
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const handledelete=((id)=>{
deletefunc(id);
handleClose()
});

  return (
    <div>
        {list.map((task)=>(

        <Accordion width={500} expanded={expanded === task.id} onChange={handleChange(task.id)}     >
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header"   > 
                <Grid container >
                  <Grid item xs={6} >
                    <Typography align='left' variant='h6'>
                      

                          {task.title}
                     
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                      <Grid container justifyContent={"flex-end"}>
                          {task.deadline}

                          
                          <IconButton ml={5} aria-label="delete" size="small" onClick={handleClickOpen} >
                            <DeleteIcon fontSize="inherit"  />
                          </IconButton>
                          <Dialog
                              open={open}
                              onClose={handleClose}
                              aria-labelledby="alert-dialog-title"
                              aria-describedby="alert-dialog-description"
                            >
                              <DialogTitle id="alert-dialog-title">
                                {"Alert"}
                              </DialogTitle>
                              <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                  Are you Sure you want to Delete this task ?
                                </DialogContentText>
                              </DialogContent>
                              <DialogActions>
                                <Button onClick={handleClose}>Back</Button>
                                <Button onClick={()=>{handledelete(task.id)}}>
                                  Delete
                                </Button>
                              </DialogActions>
                            </Dialog>
                      </Grid>
                  </Grid>
                </Grid>
             
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                {task.description}
            </Typography>
            </AccordionDetails>
        </Accordion>
      
      ))}
    </div>
  )
}

export default Tasks
