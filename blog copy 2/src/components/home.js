import React from "react";
import { Link } from "react-router-dom";
import LoginHomeBar from "./app_bar";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { maxHeight } from "@mui/system";


var Homepage = function Homepage({Blogs}) {
  return (
    <>

    <LoginHomeBar/>


      <div className="center">
        
          <h1>Ur Mementos !</h1>
        

        {/* {console.log(Blogs)} */}

        {/* <Link to="/CreateNew">
          {" "}
          <button className="new-button">Create New</button>{" "}
        </Link> */}

        <div className="blog-list">
          {Blogs.map((b) => {
            return (
              <>





                <Link style={{textDecoration:'none', paddingLeft:20,paddingRight:20,paddingTop:10}} to={`/Event/${b.id}` }>

                

                <Card sx={{ Width: 500}}>
      
        <CardMedia
          component="img"
          height="250"
          image={b.imgURL}
          
        />
        <CardContent>
          <Typography  gutterBottom variant="h5" component="div">
           {b.eventName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           
          </Typography>
        </CardContent>
      
    </Card>

                 
                      
                   
                   
                 
                  </Link>






                  <div className="plus">

<Link sx={{backgroundColor:'#FFF000' }} to='/CreateNew'>


  <AddCircleIcon sx={{ fontSize: "80px",backgroundColor:'#FFF000' }}></AddCircleIcon>
  </Link>

</div>
                
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Homepage;
