import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./table.css";
import Header from "../MyHeader/Header"; // Assuming you have a Header component

const People = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Item 1",
      price: 45,
      email: "item1@example.com",
      totalAchat: 100,
    },
    {
      id: 2,
      name: "Item 2",
      price: 25,
      email: "item2@example.com",
      totalAchat: 200,
    },
    {
      id: 3,
      name: "Item 3",
      price: 15,
      email: "item3@example.com",
      totalAchat: 300,
    },
    {
      id: 4,
      name: "Item 4",
      price: 35,
      email: "item4@example.com",
      totalAchat: 400,
    },
  ]);

  const [editingItem, setEditingItem] = useState(null);
  const [newId, setNewId] = useState("");
  const [newName, setNewName] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newTotalAchat, setNewTotalAchat] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddPerson = () => {
    setShowAddForm(true);
  };

  const handleSaveNewPerson = () => {
    const newPerson = {
      id: newId,
      name: newName,
      price: newPrice,
      email: newEmail,
      totalAchat: newTotalAchat,
    };
    setItems([...items, newPerson]);
    setShowAddForm(false);
    // Clear form fields after saving
    setNewId("");
    setNewName("");
    setNewPrice("");
    setNewEmail("");
    setNewTotalAchat("");
  };

  const handleCancelNewPerson = () => {
    setShowAddForm(false);
    // Clear form fields on cancel
    setNewId("");
    setNewName("");
    setNewPrice("");
    setNewEmail("");
    setNewTotalAchat("");
  };

  const handleDelete = (id) => {
    const filteredItems = items.filter((item) => item.id !== id);
    setItems(filteredItems);
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    setNewId(item.id);
    setNewName(item.name);
    setNewPrice(item.price);
    setNewEmail(item.email);
    setNewTotalAchat(item.totalAchat);
  };

  const handleSave = () => {
    const updatedItems = items.map((item) =>
      item.id === editingItem.id
        ? {
            ...item,
            id: newId,
            name: newName,
            price: newPrice,
            email: newEmail,
            totalAchat: newTotalAchat,
          }
        : item
    );
    setItems(updatedItems);
    setEditingItem(null);
  };

  const handleCancel = () => {
    setEditingItem(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "id":
        setNewId(value);
        break;
      case "name":
        setNewName(value);
        break;
      case "price":
        setNewPrice(value);
        break;
      case "email":
        setNewEmail(value);
        break;
      case "totalAchat":
        setNewTotalAchat(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="page-content">
      <Header />
      <h1>People</h1>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th style={{ textAlign: "center" }}>ID</th>
              <th style={{ textAlign: "center" }}>Name</th>
              <th style={{ textAlign: "center" }}>Price</th>
              <th style={{ textAlign: "center" }}>Email</th>
              <th style={{ textAlign: "center" }}>Total Achat</th>
              <th style={{ textAlign: "center" }}>Operate</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td style={{ textAlign: "center" }}>{item.id}</td>
                <td style={{ textAlign: "center" }}>{item.name}</td>
                <td style={{ textAlign: "center" }}>{item.price}</td>
                <td style={{ textAlign: "center" }}>{item.email}</td>
                <td style={{ textAlign: "center" }}>{item.totalAchat}</td>
                <td style={{ textAlign: "center" }}>
                  <button
                    className="button-delete"
                    onClick={() => handleDelete(item.id)}
                  >
                    <i className="fas fa-trash-alt"></i>
                  </button>
                  <button
                    className="button-edit"
                    onClick={() => handleEdit(item)}
                  >
                    <i className="fas fa-edit"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="6" className="pagination-footer">
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
                      value={newId}
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
                      value={newName}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Price</td>
                  <td>
                    <input
                      type="number"
                      name="price"
                      value={newPrice}
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
                      value={newEmail}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Total Achat</td>
                  <td>
                    <input
                      type="number"
                      name="totalAchat"
                      value={newTotalAchat}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <button className="button-save" onClick={handleSave}>
              <i className="fas fa-save"></i> Save
            </button>
            <button className="button-cancel" onClick={handleCancel}>
              <i className="fas fa-times"></i> Cancel
            </button>
          </div>
        )}

        <div className="add-person-form">
          <button className="button-add" onClick={handleAddPerson}>
            <i className="fas fa-plus"></i> Add Person
          </button>
        </div>

        {showAddForm && (
          <div className="add-person-modal">
            <h2>Add New Person</h2>
            <div className="form-group">
              <label>ID:</label>
              <input
                type="text"
                value={newId}
                onChange={(e) => setNewId(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Price:</label>
              <input
                type="number"
                value={newPrice}
                onChange={(e) => setNewPrice(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Total Achat:</label>
              <input
                type="number"
                value={newTotalAchat}
                onChange={(e) => setNewTotalAchat(e.target.value)}
              />
            </div>
            <button className="button-save" onClick={handleSaveNewPerson}>
              <i className="fas fa-save"></i> Save
            </button>
            <button className="button-cancel" onClick={handleCancelNewPerson}>
              <i className="fas fa-times"></i> Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default People;
