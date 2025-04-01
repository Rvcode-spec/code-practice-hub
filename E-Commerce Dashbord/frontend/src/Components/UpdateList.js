import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function UpdateList() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const apiUpdate = async () => {
      try {
        let result = await fetch(`http://localhost:5000/products/${params.id}`);
        result = await result.json();
        console.log(result);
        setName(result.name);
      } catch (error) {
        console.error("Failed to fetch product details:", error);
      }
    };
    apiUpdate();
  }, [params.id]);

  const UpdateProduct = async () => {
    console.log(name, price, category, company);
    let result  = await fetch(`http://localhost:5000/products/${params.id}`,{
      method: 'PUT',
      body :JSON.stringify({name, price, category, company}),
      headers :{
        'Content-Type':"application/json",
      }
    })
    result = await result.json();
    console.log(result);
    navigate('/products')
  };

  return (
    <>
      <h1 className="inputBox">UpdateProduct</h1>
      <input
        type="text"
        placeholder="Product Name"
        className="inputBox"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Product Price"
        className="inputBox"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <input
        type="text"
        placeholder="Product Category"
        className="inputBox"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <input
        type="text"
        placeholder="Product Company"
        className="inputBox"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />

      <button onClick={UpdateProduct} className="button">
        Submit
      </button>
    </>
  );
}

export default UpdateList;
