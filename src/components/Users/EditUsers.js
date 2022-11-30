import React,{useState,useEffect} from "react";
import axios from 'axios'
import {useHistory,useParams} from "react-router-dom";
const EditUser = () =>{
  let history = useHistory();
  const {id} = useParams();
 
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
   website: ""
 });
 const {name, username,email, phone, website}= user;
 const onInputChange = e => {
   console.log(e.target.value);
   setUser({...user,[e.target.name]: e.target.value})  
 };
 useEffect(() => {
     loadUser();
 }, []);
     
     
 const onSubmit= async e =>{
   e.preventDefault();
   await axios.put(`http://localhost:3002/users/${id}`, user);
history.push("/");
 }; 
 const loadUser = async () => {
     const result = await axios.get(`http://localhost:3002/users/${id}`);
     setUser(result.data);
 }
    return(
        <div className="container">
            <div Classname="w-75 mx-auto shadow p-5">
                <h2 className="text-center mt-4 mr-5 p-20">Edit A User</h2>
              <form onSubmit={e => onSubmit(e)}>
                <div class="form-group">
<input type="text" className="form-control form-control-lg" 
 placeholder="Enter your Name" name="name"
value={name}
onChange={e => onInputChange(e)}/>
<br/>

</div>
  <div class="form-group">
    

    <input type="text" className="form-control form-control-lg" 
     placeholder="Enter your UserName" name="username"
     value={username} 
  onChange={e => onInputChange(e)}/>
  <br/>
  
  </div>
  
  <div class="form-group">

    <input type="text" className="form-control form-control-lg" 
     placeholder="Enter your Email" name="email"
     value={email}
  onChange={e => onInputChange(e)}/>
    <br/>
  </div>
  
  <div class="form-group">
    
    <input type="text" className="form-control form-control-lg" 
    placeholder="Enter your Phone Number" name="phone"
    value={phone}
  onChange={e => onInputChange(e)}/>
    <br/>
  </div>
  
  <div class="form-group">
    
    <input type="text" className="form-control form-control-lg" 
     placeholder="Enter your Website Name" name="website"
     value={website}
    onChange={e => onInputChange(e)} />
    
  </div>
  
  <button style={{margin: '2'}} className="btn btn-warning btn-block">Update User</button>
</form>
        
            </div>


        </div>
    )
}
export default EditUser;