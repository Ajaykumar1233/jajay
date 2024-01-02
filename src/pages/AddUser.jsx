import React, { useState } from "react";
import Layout from "../component/layout/Layout";
import axios from "axios";
import { adduser } from "../features/userSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

export default function AddUser() {
  const[name,setName]=useState("")
  const[email,setEmail]=useState("")
  const[city,setCity]=useState("")

  const dispatch = useDispatch()
  const navigate = useNavigate()
 async function handleSubmit(e)
  {
    e.preventDefault()
    // console.log("clk");
    if (!name) {

      toast.error("Name is required");
    }
    else if (!email) {
      toast.error("Email is required");
    }
    else if (!city) {
      toast.error("City is required");
      
    }
    else {
     await axios.post(` http://localhost:3030/users`,{
        name,email,city
       })
      }
       dispatch(adduser())
       navigate("/users")
      //  console.log(res);
  }

  return (
    <Layout>
      <div className="row m-3">
        <div className="col-md-4 offset-4">
          <div className="card p-3 shadow">
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputName" className="form-label">
                 Enter Your Name
                </label>
                <input type="text" className="form-control" 
                value={name}
                onChange={(e)=>setName(e.target.value)}   />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail" className="form-label">
                 Enter Email Id
                </label>
                <input type="email" className="form-control" 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}  />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail" className="form-label">
                 Enter City Name
                </label>
                <input type="text" className="form-control" 
                value={city}
                onChange={(e)=>setCity(e.target.value)}   />
              </div>

              <button type="submit" className="btn btn-success w-100" onClick={handleSubmit}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
