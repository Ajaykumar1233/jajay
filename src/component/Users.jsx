import React, { useEffect } from "react";
import Layout from "./layout/Layout";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUser } from "../features/userSlice";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default function Users() {
  const dispatch = useDispatch();
  
  const users = useSelector(state=>state.users.users)
  async function getData() {

    try {
      const { data } = await axios.get(`http://localhost:3030/users`)
      console.log(data);
      dispatch(getUser(data))
    } catch (error) {
      console.log(error);
    }

  }
  useEffect(() => {
    getData()
  },[])
  // ========delete func====
 async function handleDelete(id)
  {
    try {
        await axios.delete(`http://localhost:3030/users/${id}`)
        dispatch(deleteUser(id))
        toast.success("sach me delete kr de")
    } catch (error) {
      
    }
  } 
  // ========update======
    // async  function handleUpdate(id)
    //   {
      
    //    try {
    //     await axios.post(`http://localhost:3030/users/${id}`)
    //     dispatch()
    //    } catch (error) {
        
    //    }
    //   }

  return (
    <Layout>
      <div className="container-fluid">
        <table className="table m-5">
          <thead>
            <tr>
            <th scope="col">Sr no</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">City</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
{/* ========= without d structure=====
            {users.map((user => 
            <tr key={user.id}>
              <th>{user.email} </th>
              <td>{user.name} </td>
              <td>{user.city} </td>
              <td>
                <button className="btn btn-success mx-3">Update</button>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
            ))} */}
            {/* ============= d structure======= */}
          {
            users.map((usr,i)=>{
              const {id,name,city,email} = usr
              return <>
             <tr key={id}>
             <th>{i=i+1} </th>
              <th>{email} </th>
              <td>{name} </td>
              <td>{city} </td>
              
             
              <td>
              <Link className="btn btn-success mx-3" to ={`/update/${id}`}>Update</Link>
                
                <button className="btn btn-danger" onClick={()=>handleDelete(id) }>Delete</button>
                
              </td>
            </tr>
              </>
            })
          }

          </tbody>
        </table>
      </div> 
    </Layout>
  );
}
