import React from "react";
import { Link } from "react-router-dom";
import {useParams} from "react-router-dom"
import {useState,useEffect} from 'react';
import LoginHomeBar from "./app_bar";
import Button from '@mui/material/Button'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';







var Event = function Event() {
    const params = useParams()
    // console.log(params)
    const id = params.id


    const [Moment,setMoment] = useState([]);

    useEffect (() =>{
        const getBlogRequest = async() =>{
            const url = `http://127.0.0.1:3000/blogs/single/${id}`

            const response = await fetch(url);
            const responseJson = await response.json();

            if (responseJson){
                setMoment(responseJson);
            }
        };
        getBlogRequest();
    },[Moment])

   

   

  return (
    

    <>

<LoginHomeBar/>

<div className="event-details">



  
    {/* {console.log(Moment)} */}
      <Typography> <h2 >{Moment.eventName}</h2> </Typography>

      
      <Accordion style={{marginBottom:5 ,left:'32.5%', width:'35%'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Date</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {Moment.date}
          </Typography>
        </AccordionDetails>
      </Accordion>

      <div className="image-cont">

      <img className="imagee" src={Moment.imgURL}/>
      </div>

      <Accordion style={{ left:'32.5%', width:'35%'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Things you saw</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {Moment.see}
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion style={{ left:'32.5%', width:'35%'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Things you heard</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {Moment.hear}
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion style={{ left:'32.5%', width:'35%'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Scents you smelt</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {Moment.smell}
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion style={{ left:'32.5%', width:'35%'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Things you tasted</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {Moment.taste}
          </Typography>
        </AccordionDetails>
      </Accordion>

      <div>
        <Link style={{textDecoration:'none'}} to ={`/EditEvent/${id}`}>
          <Button style={{margin:20}}  variant="contained">Edit Memento</Button>
        </Link>

        <Link  style={{textDecoration:'none', }} to= {`/DeleteVal/${id}` }  > 
        <Button  style={{backgroundColor:"#8B0000" }} variant="contained" >Delete Memento</Button>
        </Link>
      </div>
      </div>
    </>
  );
};

export default Event;