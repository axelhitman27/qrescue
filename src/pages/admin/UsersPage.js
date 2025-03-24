import React, { useState, useEffect } from "react";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: "", email: "" });

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("qrescueUsers")) || [];
    setUsers(stored);
  }, []);

  const handleAddUser = (e) => {
    e.preventDefault();
    const updated = [...users, { ...newUser, id: Date.now() }];
    setUsers(updated);
    localStorage.setItem("qrescueUsers", JSON.stringify(updated));
    setNewUser({ name: "", email: "" });
  };

  const handleDelete = (id) => {
    const updated = users.filter((u) => u.id !== id);
    setUsers(updated);
    localStorage.setItem("qrescueUsers", JSON.stringify(updated));
  };

  return (
    <div>
      <h2 className="mb-4">👥 Χρήστες</h2>

      <form className="row g-2 mb-4" onSubmit={handleAddUser}>
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Όνομα"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            required
          />
        </div>
        <div className="col-md-4">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            required
          />
        </div>
        <div className="col-md-4">
          <button className="btn btn-primary w-100" type="submit">
            ➕ Προσθήκη
          </button>
        </div>
      </form>

      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Όνομα</th>
            <th>Email</th>
            <th>Ενέργειες</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDelete(user.id)}
                >
                  🗑️ Διαγραφή
                </button>
              </td>
            </tr>
          ))}
          {users.length === 0 && (
            <tr>
              <td colSpan="3" className="text-center">
                Δεν υπάρχουν χρήστες.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UsersPage;
