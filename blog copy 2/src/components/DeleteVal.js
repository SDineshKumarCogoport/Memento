import React from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography';



var DeleteVal = function DeleteVal(){
    const params = useParams();
    


    const navigate = useNavigate();

    function DeleteMemo(ID){
        // alert("Are you sure you want to delete.")
        axios.delete(`http://127.0.0.1:3000/blogs/delete/${ID}`);
        // navigate("/");

        

    }

    return(
       
        <>
        {/* {console.log(params.id)} */}
        <div className="dlt_val_alrt">

            
            
       <Typography> <h2 className="alrt_dlt">Are you sure you wanna delete this memento ? </h2> </Typography>

        <div className="del_btns">
       
            <Link  style={{textDecoration:'none'}} to ="/">
            <Button style={{backgroundColor:"#8B0000",right:10 }}  variant="contained" onClick={DeleteMemo(params.id)} >Delete</Button>
           
            </Link>

            <Button style={{left:10}} className="cancel-btn" variant="contained" onClick={()=>navigate(-1)} >Cancel</Button>
            
           {/* {console.log()} */}

        </div>
        </div>
        </>
    );

}

export default DeleteVal;