import React, { useState } from 'react';
import {Box} from '@mui/material';
import CartPage from './stories/pages/cartPage/cartPage';


function App() {

  const [articles,setArticles]=useState([
    {
      avatar:"girl-sweatshirt-2.webp",
      price:65234.00,
      article:"The North face 10088 glacier 1/4 zipsd",
      quantity:1
    },
    {
      avatar:"girls-sweatshirts.webp",
      price:652.00,
      article:"My hovercraft is full of eels",
      quantity:1
    }
  ])

  const [userDetails,setUserDetails]= useState({userName:"",phoneNo:"",email:"",terms_conditions:false})


  const handleInput=(e:any)=>{
    setUserDetails({...userDetails,[e.target.name]:e.target.value})
  }

  const handleQuantity=(id:any,idx:any)=>{
     let newArray = [...articles];
      if(id==="add"){
        newArray[idx].quantity+=1;
        setArticles(newArray);
      }else if(id==="dec" && newArray[idx].quantity > 1){
        newArray[idx].quantity-=1;
        setArticles(newArray);
      }else{
        console.log("some error")
      }
  }

  const handleNext=(e:any)=>{
    console.log(articles,"<<<article selected")
    console.log(userDetails,"<<<user")
  }
 
  const handleCheckBox=(e:any)=>{
    console.log("<<><>")
    setUserDetails({...userDetails,["terms_conditions"]:!userDetails.terms_conditions})
  }
  return (
      <CartPage 
        articlesInfo={articles} 
        onChange={handleInput} 
        handleNext={handleNext} 
        handleQuantity={handleQuantity}
        handleCheckBox={handleCheckBox}
      />
  );
}

export default App;
