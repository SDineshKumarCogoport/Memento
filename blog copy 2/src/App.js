import './App.css';

import React, { useEffect } from "react";
import {BrowserRouter as Router,Routes,Route,BrowserRouter } from "react-router-dom";
import Event from './components/Event';
import Homepage from './components/home';
import Form from './components/CreateEvent';
//mychanges

import DeleteVal from './components/DeleteVal';
import {useState} from 'react';
import EditEvent from './components/EditEvent';
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import EventNoteIcon from "@mui/icons-material/EventNote";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";



function App() {
    const [Blogs,setBlogs] = useState([]);

    useEffect (() =>{
        const getBlogRequest = async() =>{
            const url = 'http://127.0.0.1:3000/blogs'

            const response = await fetch(url);
            const responseJson = await response.json();

            if (responseJson){
                setBlogs(responseJson);
            }
        };
        getBlogRequest();
    },[Blogs])



    return(

        <>
      
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Homepage Blogs={Blogs} />}>
                </Route>  
                <Route path='/CreateNew' element={<Form/>}>
                </Route>
                <Route path='/Event/:id' element={<Event/>}>
                </Route>
                <Route path='/EditEvent/:id' element={<EditEvent/>}>
                </Route>
                <Route path='/DeleteVal/:id' element={<DeleteVal/>}>
                </Route>


            </Routes>
        </BrowserRouter>
        
        </>
        
        
        
    );
}

export default App;

    





