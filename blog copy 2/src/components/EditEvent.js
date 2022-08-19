import React from "react";
import { Link } from "react-router-dom";
import {useParams} from "react-router-dom"
import {useState,useEffect} from 'react';
//import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import LoginHomeBar from "./app_bar";







var EditEvent = function EditEvent() {
    const params = useParams()
    // console.log(params)
    const id = params.id


  
    const [eventName, setEventName] = useState('');
    const[date,setDate]=useState('');
    const [imgURL, setImgURL ]= useState('');
    const [see, setSee] = useState('');
    const [hear, setHear] = useState('');
    const [smell, setSmell] = useState('');
    const[taste,setTaste] = useState('');
    const [note, setNote] = useState('');
    
    const [Moment,setMoment] = useState([]);




useEffect (() =>{
    const getBlogRequest = async() =>{
        const url = `http://127.0.0.1:3000/blogs/single/${id}`

        const response = await fetch(url);
        const responseJson = await response.json();

        if (responseJson){
            setEventName(responseJson.eventName);
            setDate(responseJson.date);
            setImgURL(responseJson.imgURL);
            setSee(responseJson.see);
            setHear(responseJson.hear);
            setSmell(responseJson.smell);
            setTaste(responseJson.taste);
            setNote(responseJson.note)

            setMoment(responseJson);
        }

        else{
            alert("no data")
        }

    };
    getBlogRequest();
},[]);


let update = async (ID) => {
    const res = await axios.put(`http://127.0.0.1:3000/blogs/update/${ID}`, {
        eventName:eventName,
        date :date,
        imgURL :imgURL,
        see:see,
        hear:hear,
        smell :smell,
        taste:taste,
        note :note,
        blog_id: 1
    });
    console.log(res)
 

  };

    return (
    

    <>
      <LoginHomeBar/>

   <h1 className="BlogHeading">Edit Memento</h1>

   <Box
                            component="form"
                               sx={{
                           '& > :not(style)': { m: 1, width: '40ch' },
                              }}
                           noValidate
                          autoComplete="off"
                          >

    {/* {console.log(Moment)} */}

   
    
    <TextField id="outlined-basic" size="large" label="Event Name" variant="outlined" onChange={(e) => setEventName(e.target.value)} value={eventName}/>
    {/* <input type="text" placeholder="Title of the event" id="eventName" onChange={(e) => setEventName(e.target.value)} value={eventName}/> */}

  
    <TextField id="outlined-basic" label="Enter Event Date" variant="outlined" onChange={(e) => setDate(e.target.value)} value={date} />
    {/* <input type="text" placeholder="Date" id="eventName" onChange={(e) => setDate(e.target.value)} value={date}/> */}
      

    

     <TextField id="outlined-basic" label="Enter Image URL" variant="outlined" onChange={(e) => setImgURL(e.target.value)} value={imgURL} />

     
      
      <TextField id="outlined-basic" label="Things you saw in the moment" variant="outlined" onChange={(e) => setSee(e.target.value)} value={see} />
  {/* <input type="text" placeholder="See" id="eventName" onChange={(e) => setSee(e.target.value)} value={see}/> */}
      
      
  
      <TextField id="outlined-basic" label="Sounds you heared " variant="outlined" onChange={(e) => setHear(e.target.value)} value={hear} />
     

      
      
      <TextField id="outlined-basic" label="Scents you smellled " variant="outlined" onChange={(e) => setSmell(e.target.value)} value={smell} /> 
      

      
 
      <TextField id="outlined-basic" label="Things you tasted " variant="outlined" onChange={(e) => setTaste(e.target.value)} value={taste} />
     

   
      
      <TextField id="outlined-textarea"  label="Short Note" multiline onChange={(e) => setNote(e.target.value)} value={note} />
      

      </Box>

      
        
        <Link to="/">
        <Button  style = {{position:"absolute",right:"45%",marginTop:"20"}}   onClick={() => update(Moment?.id)} variant="contained">Save Changes</Button>
       
        </Link>
     
       
    </>
  );
};

export default EditEvent;