import React, { useState } from 'react';
import './table.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import Header from "../MyHeader/Header"; 


const User = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1', phoneNumber: 45, email: 'item1@example.com', Accesslevel: 'User' },
    { id: 2, name: 'Item 2', phoneNumber: 25, email: 'item2@example.com', Accesslevel: 'Admin' },
    { id: 3, name: 'Item 3', phoneNumber: 15, email: 'item3@example.com', Accesslevel: 'User' },
    { id: 4, name: 'Item 4', phoneNumber: 35, email: 'item4@example.com', Accesslevel: 'Admin' },
  ]);

  const [editingItem, setEditingItem] = useState(null);
  const [formState, setFormState] = useState({
    id: '',
    name: '',
    phoneNumber: '',
    email: '',
    Accesslevel: 'User' // Default to 'User'
  });

  const handleDelete = (id) => {
    const filteredItems = items.filter(item => item.id !== id);
    setItems(filteredItems);
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    setFormState(item);
  };

  const handleSave = () => {
    const updatedItems = items.map(item =>
      item.id === editingItem.id
        ? { ...item, ...formState }
        : item
    );
    setItems(updatedItems);
    setEditingItem(null);
  };

  const handleCancel = () => {
    setEditingItem(null);
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="page-content">
        <Header />
      <h1>Team Members</h1>
      <p>
        Manage your team's information
      </p>

      <table className="table">
        <thead>
          <tr>
            <th style={{ textAlign: 'center' }}>ID</th>
            <th style={{ textAlign: 'center' }}>Name</th>
            <th style={{ textAlign: 'center' }}>Phone Number</th>
            <th style={{ textAlign: 'center' }}>Email</th>
            <th style={{ textAlign: 'center' }}>Access Level</th>
            <th style={{ textAlign: 'center' }}>Operate</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td style={{ textAlign: 'center' }}>{item.id}</td>
              <td style={{ textAlign: 'center' }}>{item.name}</td>
              <td style={{ textAlign: 'center' }}>{item.phoneNumber}</td>
              <td style={{ textAlign: 'center' }}>{item.email}</td>
              <td style={{ textAlign: 'center' }}>
                <select
                  className="list"
                  name="Accesslevel"
                  value={formState.id === item.id ? formState.Accesslevel : item.Accesslevel}
                  onChange={handleChange}
                  disabled={editingItem?.id !== item.id}
                >
                  <option value="Admin">Admin</option>
                  <option value="User">User</option>
                </select>
              </td>
              <td style={{ textAlign: 'center' }}>
                <button className='button-delete' onClick={() => handleDelete(item.id)}>
                  <i className="fas fa-trash-alt"></i>
                </button>
                <button className='button-edit' onClick={() => handleEdit(item)}>
                  <i className="fas fa-edit"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td id="cols" colSpan="6" className="pagination-footer">
              <div className="pagination-content">
                <button className="pagination-button">
                  <i className="fas fa-chevron-left"></i> Previous
                </button>
                <button className="pagination-button">
                  <i className="fas fa-chevron-right"></i> Next
                </button>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>

      {editingItem && (
        <div className="edit-table">
          <h3>Edit Item</h3>
          <table className="small-table">
            <tbody>
              <tr>
                <td>ID</td>
                <td>
                  <input
                    type="text"
                    name="id"
                    value={formState.id}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Name</td>
                <td>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Phone Number</td>
                <td>
                  <input
                    type="number"
                    name="phoneNumber"
                    value={formState.phoneNumber}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Email</td>
                <td>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <button className='button-save' onClick={handleSave}>
            <i className="fas fa-save"></i> Save
          </button>
          <button className='button-cancel' onClick={handleCancel}>
            <i className="fas fa-times"></i> Cancel
          </button>
        </div>
      )}

      <div className="add-item-form">
        <button className='button-add'>
          <i className="fas fa-plus"></i> Add user
        </button>
      </div>
    </div>
  );
};

export default User;