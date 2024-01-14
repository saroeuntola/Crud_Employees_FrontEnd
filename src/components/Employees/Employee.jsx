import React, { useState, useEffect } from "react";
import axios from "axios";
import '../Employees/emp.css'
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
const Employee = () => {

  const [listEmp, setListEmp] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const getAllEmp = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/api/employees");
      setListEmp(res.data);
      console.log(res.data)
    } catch (error) {
      console.error("Error loading employees:", error);
    }
  };
  useEffect(() => {
    getAllEmp();
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredEmp = listEmp.filter((item) => {
    const search = searchQuery.toLowerCase();
    return (
      String(item.id).toLowerCase().includes(search) ||
      item.name.toLowerCase().includes(search) ||
      item.address.toLowerCase().includes(search) ||
      item.mobile.toLowerCase().includes(search)
    );
  });

  const handleDelete = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        await axios.delete(`http://127.0.0.1:8000/api/delete/${id}`);
        // Remove the deleted employee from the list
        setListEmp((prevListEmp) =>
          prevListEmp.filter((item) => item.id !== id)
        );

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  return (
    <main className="container main-home">
      <div className="mb-3">
        <input
          type="search"
          className="form-control shadow-none"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <h2>list Employee</h2>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmp.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.address}</td>
              <td>{item.mobile}</td>
              <td>
                <Link to={`/edit/${item.id}`}>
                  <button className="btn btn-success me-2">Edit</button>
                </Link>
                <button
                  className="btn btn-danger "
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default Employee;
