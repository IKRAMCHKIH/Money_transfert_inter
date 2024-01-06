import React, { useState } from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
const Blacklist = () => {
  const [blacklist, setBlacklist] = useState([
    { id: 1, name: 'John Doe', idCard: '123456789', number: '987654321', reason: 'Fraud', account: '123-456-789' },
    { id: 2, name: 'Jane Doe', idCard: '987654321', number: '123456789', reason: 'Suspicious Activity', account: '987-654-321' },
  ]);

  const [editedPerson, setEditedPerson] = useState({
    id: null,
    name: '',
    idCard: '',
    number: '',
    reason: '',
    account: '',
  });

  const handleEditClick = (person) => {
    setEditedPerson({ ...person });
  };

  const handleSaveClick = () => {
    setBlacklist((prevList) =>
      prevList.map((person) => (person.id === editedPerson.id ? editedPerson : person))
    );
    setEditedPerson({ id: null, name: '', idCard: '', number: '', reason: '', account: '' });
  };

  const handleAddPersonClick = () => {
    const newId = Math.max(...blacklist.map((person) => person.id)) + 1;
    setBlacklist((prevList) => [...prevList, { id: newId, name: '', idCard: '', number: '', reason: '', account: '' }]);
    setEditedPerson({ id: newId, name: '', idCard: '', number: '', reason: '', account: '' });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSaveClick();
  };

  return (<div>
     <Header />
    <div className="blacklist-container">
      <h1 className="header">Blacklist Management</h1>

      {/* Table of Blacklisted Persons */}
      <div className="table-container">
        <h2>Blacklist</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>ID Card</th>
              <th>Number</th>
              <th>Reason</th>
              <th>Account Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {blacklist.map((person) => (
              <tr key={person.id}>
                <td>{person.id}</td>
                <td>
                  {editedPerson.id === person.id ? (
                    <input
                      type="text"
                      value={editedPerson.name}
                      onChange={(e) => setEditedPerson({ ...editedPerson, name: e.target.value })}
                    />
                  ) : (
                    person.name
                  )}
                </td>
                <td>
                  {editedPerson.id === person.id ? (
                    <input
                      type="text"
                      value={editedPerson.idCard}
                      onChange={(e) => setEditedPerson({ ...editedPerson, idCard: e.target.value })}
                    />
                  ) : (
                    person.idCard
                  )}
                </td>
                <td>
                  {editedPerson.id === person.id ? (
                    <input
                      type="text"
                      value={editedPerson.number}
                      onChange={(e) => setEditedPerson({ ...editedPerson, number: e.target.value })}
                    />
                  ) : (
                    person.number
                  )}
                </td>
                <td>
                  {editedPerson.id === person.id ? (
                    <input
                      type="text"
                      value={editedPerson.reason}
                      onChange={(e) => setEditedPerson({ ...editedPerson, reason: e.target.value })}
                    />
                  ) : (
                    person.reason
                  )}
                </td>
                <td>
                  {editedPerson.id === person.id ? (
                    <input
                      type="text"
                      value={editedPerson.account}
                      onChange={(e) => setEditedPerson({ ...editedPerson, account: e.target.value })}
                    />
                  ) : (
                    person.account
                  )}
                </td>
                <td>
                  {editedPerson.id === person.id ? (
                    <button onClick={handleSaveClick} className="save-btn">
                      Save
                    </button>
                  ) : (
                    <button onClick={() => handleEditClick(person)} className="edit-btn">
                      Edit
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="button-container">
          <button type="button" onClick={handleAddPersonClick} className="add-btn">
            Add a Person to the Blacklist
          </button>
        </div>
      </div>
    </div>

    </div>
  );
};

export default Blacklist;
