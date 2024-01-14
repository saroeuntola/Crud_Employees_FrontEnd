import React, { useState} from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const Add = () => {
  
  const [name ,setName] = useState('')
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const navigate = useNavigate();

  const inputData = {
    name: name,
    address: address,
    mobile: mobile,
  };


  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const result = await Swal.fire ({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, save it!'
      });
      if (result.isConfirmed) {
        await axios.post(`http://127.0.0.1:8000/api/save`, inputData);
        Swal.fire({
          title: 'Saved!',
          text: 'Your file has been saved.',
          icon:'success'
        });
        navigate("/");
      }
    } catch (err) {
      console.error("Error saving employee:", err);
       Swal.fire("Please Enter Field");
    }
  };



  return (
    <main className="container main-add">
      <h2>Add New</h2>
      <form onSubmit={handleSave}>
        <div className="form-group mb-3 mt-4">
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
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="form-group mb-4">
          <label>Mobile</label>
          <input
            type="text"
            className="form-control shadow-none"
            name="mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary me-3">
          Save
        </button>
        <Link to="/">
          <button className="btn btn-danger">Back</button>
        </Link>
      </form>
    </main>
  );
};

export default Add;
