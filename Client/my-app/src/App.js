import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Tasks from './Components/Tasks';
import AddForm from './Components/AddForm';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import axios from 'axios'
import { Snackbar } from '@mui/material';
import {Grid} from '@mui/material'

function App() {

   const [tasks,settasks]=useState([])
   const[visible,setvisible]=useState(false)
   const [flag,setflag] = useState(false)
   const [open, setOpen] = useState(false);
   const [snack,setsnack]=useState(false)
useEffect(()=>{
  const fetch=()=>{
    axios.get('http://localhost:8000/')
        .then((res)=>{
          console.log(res.data)
          settasks(res.data  )
        })
    };
    fetch();
    
   
},[flag])





const deletetask= (id)=>{
  console.log("ID Is Here ", id)
  axios.delete('http://localhost:8000/',{data:{"id":id}})
    .then((res)=>{
      console.log(res)
      setflag(!flag)
     
    })
 
}

const addtask=(task)=>
{
  
  const id = Math.floor(Math.random()*10000)+1
  if (task.title!=='' && task.description!==''){
  console.log(id)
  const newtask={id,...task}
  console.log(newtask )
  //settasks([newtask,...tasks])
  
    axios.post('http://localhost:8000/',newtask)
    .then((res)=>{
      console.log(res)
      setflag(!flag)
    })
  }
  else{
    setsnack(!snack)
    setOpen(!open)
  }
    
  
}


const handleClose = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }

  setOpen(false);
};


  return (
    <div className="App">
        <Header/>
          <Container maxWidth="md" >
              <Grid container justifyContent={"flex-end"}>
                <Grid item >

                <Button variant="outlined" onClick={()=>{setvisible(!visible)}}>{visible?'Close':'Add'} Task</Button> 
                </Grid>
              </Grid>
            {visible && <AddForm addtask={addtask}/>}
            {tasks.length>0 ?
          (<Tasks list={tasks} deletefunc ={deletetask}/> ) :
              ('No Tasks to Show')
            }
            
          </Container>
            {snack && 
          <Snackbar
            open={open}
            autoHideDuration={4000}
            onClose={handleClose}
            message="Title and/or Description Can't be Empty"
            
          />
            } 
    </div>
  );
}

export default App;
