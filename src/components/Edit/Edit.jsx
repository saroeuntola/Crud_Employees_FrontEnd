import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const Edit = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const navigate = useNavigate();

  const inputData = {
    name: name,
    address: address,
    mobile: mobile,
  };

  useEffect(() => {

    const getData = async () => {
      try {
        const res = await axios.get(`http://127.0.0.1:8000/api/employees/${id}/edit`);
        setName(res.data.name);
        setAddress(res.data.address);
        setMobile(res.data.mobile);
      } catch (error) {
        console.error("Error fetching employee data:", error);
      }
    };
    getData();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    
    try { 
      // const result = await Swal.fire("SweetAlert2 is working!");
      // if(result.isConfirmed){
         const result = await Swal.fire({
           title: "Are you sure?",
           text: "You won't be able to revert this!",
           icon: "warning",
           showCancelButton: true,
           confirmButtonColor: "#3085d6",
           cancelButtonColor: "#d33",
           confirmButtonText: "Yes, Update it!",
         });
         if(result.isConfirmed){
            await axios.put(`http://127.0.0.1:8000/api/update/${id}`,inputData );
            Swal.fire({
              title: "Updated!",
              text: "Your file has been updated.",
              icon: "success",
            });
            navigate("/");
         }
      

    
    } catch (error) {
      console.error("Error updating employee:", error);
    }
  };

  return (
    <main className="container main-edit">
      <h2>Update Employee</h2>
      <form onSubmit={handleUpdate}>
        <div className="form-group mb-3">
          <label>ID</label>
          <input
            type="text"
            className="form-control mb-3"
            value={id}
            disabled
          />
        </div>
        <div className="form-group mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control shadow-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <label>Address</label>
          <input
            type="text"
            className="form-control shadow-none"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <label>Mobile</label>
          <input
            type="text"
            className="form-control shadow-none"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary me-3">
          Update
        </button>
        <Link to="/">
          <button className="btn btn-danger">Back</button>
        </Link>
      </form>
    </main>
  );
};

export default Edit;
