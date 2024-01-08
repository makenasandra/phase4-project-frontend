import React, { useState } from 'react';
import reviews from "../reviews";

const Card = ({ id, content, onDelete }) => {
  const [editable, setEditable] = useState(false);
  const [editedContent, setEditedContent] = useState(content);

  const handleEditClick = () => {
    setEditable(true);
  };

  const handleSaveClick = (newContent) => {
    setEditable(false);
    console.log(newContent)
    // reviews[id-1].comment = 
    // Perform save operation (e.g., update content in the database)
  };

  const handleDeleteClick = () => {
    // Pass the card id to the parent component for deletion
    onDelete(id);
  };

  const handleChange = (e) => {
    setEditedContent(e.target.value);
  };

  return (
    <div className="card">
      <textarea
        className={`card-content ${editable ? 'editable' : ''}`}
        value={editedContent}
        onChange={handleChange}
        readOnly={!editable}
      />
      <div className="button-container">
        {editable ? (
          <button className="save-button" onClick={handleSaveClick}>
            Save
          </button>
        ) : (
          <button className="edit-button" onClick={handleEditClick}>
            Edit
          </button>
        )}
        <button className="delete-button" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
