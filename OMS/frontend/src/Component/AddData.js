import React, { useState } from 'react';

const AddData = () => {
  const [Company, setCompany] = useState('');
  const [Address, setAddress] = useState('');
  const [Material, setMaterial] = useState('');
  const [QRT, setQRT] = useState('');
  const [Reta, setReta] = useState('');
  const [error, setError] = useState(false);

  const handleAdd = async (e) => {
    e.preventDefault(); // prevent default form submission

    if (!Company || !Address || !Material || !QRT || !Reta) {
      setError(true);
      return;
    }

    const admin = JSON.parse(localStorage.getItem("admin") || "{}");
    const userId = admin._id;

    if (!userId) {
      console.error("Admin not found or invalid");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/adddata", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Company, Address, Material, QRT, Reta, adminId:userId }),
      });

      const text = await response.text();
      console.log("Raw response:", text);

      const result = JSON.parse(text);
      console.log("Product added successfully:", result);

      // Clear fields
      setCompany('');
      setAddress('');
      setMaterial('');
      setQRT('');
      setReta('');
      setError(false);

    } catch (error) {
      console.error("Error while adding product:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Add Company Data</h2>

      <form onSubmit={handleAdd} className="row g-3 mb-4">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Company Name"
            value={Company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Address"
            value={Address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Material"
            value={Material}
            onChange={(e) => setMaterial(e.target.value)}
          />
        </div>
        <div className="col-md-2">
          <input
            type="text"
            className="form-control"
            placeholder="QRT"
            value={QRT}
            onChange={(e) => setQRT(e.target.value)}
          />
        </div>
        <div className="col-md-2">
          <input
            type="text"
            className="form-control"
            placeholder="Reta"
            value={Reta}
            onChange={(e) => setReta(e.target.value)}
          />
        </div>
        <div className="col-md-2">
          <button type="submit" className="btn btn-success w-100">Add</button>
        </div>
      </form>

      {error && <p className="text-danger">* Please fill all fields correctly.</p>}
    </div>
  );
};

export default AddData;
