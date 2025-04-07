import React, { useState } from 'react';

const AddData = () => {
  const [formData, setFormData] = useState({
    company: '',
    address: '',
    material: '',
    qrt: '',
    reta: ''
  });

  const [tableData, setTableData] = useState([]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Add data to table
  const handleAdd = (e) => {
    e.preventDefault();
    setTableData(prev => [...prev, formData]);
    setFormData({
      company: '',
      address: '',
      material: '',
      qrt: '',
      reta: ''
    });
  };

  // Delete row
  const handleDelete = (index) => {
    const updatedData = [...tableData];
    updatedData.splice(index, 1);
    setTableData(updatedData);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Add Company Data</h2>

      <form onSubmit={handleAdd} className="row g-3 mb-4">
        <div className="col-md-4">
          <input type="text" className="form-control" name="company" placeholder="Company Name" value={formData.company} onChange={handleChange} required />
        </div>
        <div className="col-md-4">
          <input type="text" className="form-control" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
        </div>
        <div className="col-md-4">
          <input type="text" className="form-control" name="material" placeholder="Material" value={formData.material} onChange={handleChange} required />
        </div>
        <div className="col-md-2">
          <input type="text" className="form-control" name="qrt" placeholder="QRT" value={formData.qrt} onChange={handleChange} required />
        </div>
        <div className="col-md-2">
          <input type="text" className="form-control" name="reta" placeholder="Reta" value={formData.reta} onChange={handleChange} required />
        </div>
        <div className="col-md-2">
          <button type="submit" className="btn btn-success w-100">Add</button>
        </div>
      </form>

      {/* Data Table */}
      <table className="table table-bordered border-primary mt-3">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Company Name</th>
            <th>Address</th>
            <th>Material</th>
            <th>QRT</th>
            <th>Reta</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData.length === 0 ? (
            <tr>
              <td colSpan="7" className="text-center">No data added yet</td>
            </tr>
          ) : (
            tableData.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.company}</td>
                <td>{item.address}</td>
                <td>{item.material}</td>
                <td>{item.qrt}</td>
                <td>{item.reta}</td>
                <td>
                  <button className="btn btn-danger btn-sm" onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AddData;
