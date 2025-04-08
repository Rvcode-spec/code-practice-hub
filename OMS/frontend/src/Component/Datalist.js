import React, { useEffect, useState } from "react";

export default function Datalist() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const admin = JSON.parse(localStorage.getItem("admin") || "{}");
    const adminId = admin._id;
  
    if (!adminId) {
      console.warn("No admin ID found in localStorage");
      return;
    }
  
    try {
      const response = await fetch(`http://localhost:5000/data?adminId=${adminId}`);
      const result = await response.json();
      console.log("Fetched data:", result);
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/data/${id}`, {
        method: "DELETE",
      });
  
      if (!response.ok) {
        console.error("Failed to delete");
        return;
      }
  
      getData(); // refresh
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };
  

  return (
    <div className="container mt-5">
      <h3 className="mb-4">Company Data List</h3>
      <table className="table table-bordered border-primary">
        <thead className="table-dark">
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
          {data.length > 0 ? (
            data.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.Company}</td>
                <td>{item.Address}</td>
                <td>{item.Material}</td>
                <td>{item.QRT}</td>
                <td>{item.Reta}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center">
                No data found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
