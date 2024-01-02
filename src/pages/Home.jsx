import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import Layout from '../component/layout/Layout';
// import Navbar from '../component2/Navbar';
// import axios from 'axios';
export default function Product() {
    const [products, setProduct] = useState([])
    const navigate = useNavigate()
    // async function getData(){
    //     const res = await axios.get(`https://fakestoreapi.com/products`)
        //  setProduct(res.data)

    // }




    useEffect(() => {
        fetch(`https://fakestoreapi.com/products`)
            .then(data => data.json())
            .then(result => setProduct(result))
    }, []);
   
    const cards = products.map((product, id) => (
        <div className="col-md-3" style={{ backgroundColor:'ButtonHighlight' ,marginBottom:'30px'}}>

            <Card style={{ width: '18rem' }} key={product.id}>
                <div className='text-center'>
                    <Card.Img variant="top" src={product.image} style={{ width: '200px', height: '200px' }} />
                </div>
                <Card.Body>
                    <Card.Title> <h3> {product.title.substring(0,7)}</h3></Card.Title>
                    <Card.Text>
                        <h4>RS: {product.price}</h4>
                    </Card.Text>

                </Card.Body>
                <Card.Footer style={{ backgroundColor: 'GrayText' }}> 
                 <Button className="btn-btn-success" onClick={()=>navigate("/productdetail")}  > Add to Cart</Button>
                 </Card.Footer>
            </Card>

        </div>
    ))
    return (
        <Layout>
            <h1 className='product'> product dashboard</h1>
            {/* {JSON.stringify(products)} */}
            <div className="row">
                {cards}

            </div>
            </Layout>
        
    )
}
