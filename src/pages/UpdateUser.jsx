import React from 'react'
import Layout from '../component/layout/Layout'
import axios from 'axios';
// import { adduser } from "../features/userSlice";
import { updateUser  } from '../features/userSlice';
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState ,useEffect} from 'react';

export default function UpdateUser() {
 const { id } = useParams()
  // console.log(id);
  const users = useSelector((state) => state.users.users)
  // console.log(users)
  const user = users.find((u) => u.id == id)
  // console.log(user)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [city, setCity] = useState("")

  const dispatch = useDispatch()
  const navigate = useNavigate()

  async function getDetails()
  {
     let data = await axios.get(`http://localhost:3030/users/${id}`)
     console.log(id);
      setName(data.name)
      setEmail(data.email)
      setCity(data.city)
  } 

  useEffect(()=>{
    getDetails()
  },[])

  async function handleChange(e) {
    e.preventDefault()
    // console.log("clk");
    const res = await axios.put(`http://localhost:3030/users/${id}`, { name, email, city })

    dispatch(updateUser(res))
    navigate("/users")
    console.log(res);
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
                  onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail" className="form-label">
                  Enter Email Id
                </label>
                <input type="email" className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail" className="form-label">
                  Enter City Name
                </label>
                <input type="text" className="form-control"
                  value={city}
                  onChange={(e) => setCity(e.target.value)} />
              </div>

              <button type="submit" className="btn btn-success w-100" onClick={handleChange}>
                update
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}
