import React, { useState } from "react";
import { useAxios } from "./useAxios";

const User = ({ userItem }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...userItem });
  const {
    response: deleteResponse,
    error: deleteError,
    isLoading: deleteLoading,
    request: deleteRequest,
  } = useAxios("users/" + userItem.id, "delete");
  const {
    response: updateResponse,
    error: updateError,
    isLoading: updateLoading,
    request: updateRequest,
  } = useAxios("users/" + userItem.id, "put");

  const deleteUser = async () => {
    try {
      await deleteRequest();
      console.log("User deleted successfully");
    } catch (error) {
      console.error("Error deleting user:", deleteError);
    }
  };

  const updateUser = async () => {
    try {
      await updateRequest(editedUser);
      console.log("User updated successfully");
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating user:", updateError);
    }
  };

  return (
    <div key={userItem.id} className="card">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedUser.name}
            onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })}
          />
          <input
            type="text"
            value={editedUser.username}
            onChange={(e) => setEditedUser({ ...editedUser, username: e.target.value })}
          />
          {/* Add more input fields for other user properties */}
          <button onClick={updateUser}>Save</button>
        </>
      ) : (
        <>
          <h3>Name: {userItem.name}</h3>
          <p>Username: {userItem.username}</p>
          <p>Email: {userItem.email}</p>
          <p>Phone: {userItem.phone}</p>
          <p>Website: {userItem.website}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={deleteUser} disabled={updateLoading || deleteLoading}>
            Delete
          </button>
        </>
      )}
    </div>
  );
};

export default User;
