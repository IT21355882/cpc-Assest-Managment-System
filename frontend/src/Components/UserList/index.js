import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, InputGroup, FormControl, Button } from "react-bootstrap";
import NavigationBar from "../Nav/Nav";
import { Link } from "react-router-dom";

function UserList() {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch users from API
  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/user");
      setUsers(response.data.user || []);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // Delete user
  const deleteUser = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user? This action cannot be undone."
    );
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:5000/user/deleteUser/${id}`);
      alert("User deleted successfully!");
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("Failed to delete user.");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Filtered users based on search query
  const filteredUsers = users.filter(
    (user) =>
      user.employeeId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <NavigationBar />
      <div className="container mt-4">
        <h1 className="text-center mb-4">User List</h1>

        <Link to={`/register`} className="mx-auto mb-4 btn btn-danger">
          Register New User
        </Link>

        {/* Search Input */}
        <InputGroup className="mb-4">
          <FormControl
            placeholder="Search by Employee ID or Name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </InputGroup>

        {/* User Table */}
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Position</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <tr key={user._id}>
                  <td>{user.employeeId}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.position}</td>
                  <td>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => deleteUser(user._id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default UserList;
