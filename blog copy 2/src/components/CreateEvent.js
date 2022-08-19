import React, { useState } from 'react'
import axios from 'axios';
import{Link} from "react-router-dom";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import LoginHomeBar from './app_bar';
import { Typography } from '@mui/material';



export default function AddEvent() {
  const navigate = useNavigate();
 
  const [eventName, setEventName] = useState('');
  const[date,setDate]=useState('');
  const [imgURL, setImgURL ]= useState('');
  const [see, setSee] = useState('');
  const [hear, setHear] = useState('');
  const [smell, setSmell] = useState('');
  const[taste,setTaste] = useState('');
  const [note, setNote] = useState('');
  
 
  let add = async () => {
    console.log("1");
    const res = await axios.post('http://127.0.0.1:3000/blogs', {
      eventName:eventName,
      date :date,
      imgURL :imgURL,
      see:see,
      hear:hear,
      smell :smell,
      taste:taste,
      note :note,
      blog_id: 1
    }
   

    )
 
    navigate('/')
    //redirect page using react
    console.log(res);
  
  }
    
    
  return (
 
    <>

<LoginHomeBar/>
    
    <div className="infoContainer ">
       <h1 className="BlogHeading">Create New Memento</h1>
                        <div className="form">

                        <Box
                            component="form"
                               sx={{
                           '& > :not(style)': { m: 1, width: '40ch' },
                              }}
                           noValidate
                          autoComplete="off"
                          >
                            
                                
                                <TextField id="outlined-basic" size="large" label="Event Name" variant="outlined" onChange={(e) => setEventName(e.target.value)}/>
                                {/* <input type="text" placeholder="Title of the event" id="eventName" onChange={(e) => setEventName(e.target.value)}/> */}
                                {/* <input type="text" placeholder="Enter Event Date" id="date" onChange={(e) => setDate(e.target.value)}/> */}
                                <TextField id="outlined-basic" label="Enter Event Date" variant="outlined" onChange={(e) => setDate(e.target.value)} />

                                <TextField id="outlined-basic" label="Enter Image URL" variant="outlined" onChange={(e) => setImgURL(e.target.value)} />

                                <TextField id="outlined-basic" label="Things you saw in the moment" variant="outlined" onChange={(e) => setSee(e.target.value)} />
                                {/* <input type="text" placeholder="Enter Image URL" id="ImageURL" onChange={(e) => setImgURL(e.target.value)}/> */}

                                <TextField id="outlined-basic" label="Sounds you heared " variant="outlined" onChange={(e) => setHear(e.target.value)} />
                                {/* <input type="text" placeholder="Enter what you saw" id="saw" onChange={(e) => setSee(e.target.value)}/> */}

                                {/* <input type="text" placeholder="What you heard" id="heard" onChange={(e) => setHear(e.target.value)}/> */}
                                <TextField id="outlined-basic" label="Scents you smellled " variant="outlined" onChange={(e) => setSmell(e.target.value)} />
                                {/* <input type="text" placeholder="What you smelt" id="smell" onChange={(e) => setSmell(e.target.value)}/> */}

                                <TextField id="outlined-basic" label="Things you tasted " variant="outlined" onChange={(e) => setTaste(e.target.value)} />
                                {/* <input type="text" placeholder="What you tasted" id="tasted" onChange={(e) => setTaste(e.target.value)}/> */}

                                <TextField id="outlined-textarea"  label="Short Note" multiline onChange={(e) => setNote(e.target.value)} />
                                                                     

                                {/* <input type="text" placeholder="Write some note" id="note" onChange={(e) => setNote(e.target.value)}/> */}
                                
                                {/* <textarea name="message" id="content" cols="30" rows="5" placeholder="Blog Content" onChange={(e) => setContent(e.target.value)}></textarea> */}
                                {/* <button type="button" class="btn" onChange={(e) => setUrl(e.target.value)}>Upload Image</button> */}
                            
                                </Box>
                              <div>
                               
                              <Button style = {{position:"absolute",right:"48%",marginTop:"20"}}  onClick={() => add()} variant="contained">Submit</Button>
                              </div>
                        </div>
                        </div>
    </>
    
  );
}
 

















































// import React from "react";
// import{Link} from "react-router-dom"

// export default function Form() {
//   return (
//     <>
//       <div class="infoContainer ">
//         <h1 className="BlogHeading">Add a Memento</h1>

//         <div class="form">
//             <form>
//             <input type="text" placeholder="Event Name" />

//             <input type="text" placeholder="Date" />
//             <input type="text" placeholder="Image URL" />

//             <input type="text" placeholder="Things you saw" />

//             <input type="text" placeholder="Things you touched" />
//             <input type="text" placeholder="Things you heared" />
//             <input type="text" placeholder="Things you smelled" />
//             <input type="text" placeholder="Things you tasted" />
//             <input type="text" placeholder="Short Note" />

//             <textarea
//               name="message"
//               id=""
//               cols="20"
//               rows="10"
//               placeholder="Description"
//             ></textarea>

//            <Link to="/"> <button>Submit</button></Link>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }
