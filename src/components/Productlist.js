import React,{useState,useEffect} from 'react'

function Productlist() {
  // create state to hold all products
  const[allProduct,setProduct] = useState([])

  // function to call api to get all restaurant
  const getProduct = async ()=>{
    await fetch('/db.json')
    .then((data)=>{
      data.json()
      .then((result)=>{
        setProduct(result);
      })
    })
  }
  console.log(allProduct);
     useEffect(()=>{
      getProduct()
     },[])
  return (
    <div>Productlist</div>
  )
}

export default Productlist