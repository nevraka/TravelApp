import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ListCom() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    fetch('http://localhost:3000/comments')
      .then((response) => response.json())
      .then((results) => {
        setComments(results);
      });
  };

  const handleDelete = async (id) => {
    fetch(`http://localhost:3000/comments/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.status === 200) {
          const remaining = comments.filter((c) => id !== c.id);
          setComments(remaining);
        } else {
          throw `status code: ${response.status}`;
        }
      })
      .catch((e) => {
        console.error(e);
        alert('An error accured');
      });
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Hotel ID</th>
            <th>User ID</th>
            <th>Text</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((comment) => {
            const deleteComment = () => handleDelete(comment.id);
            return (
              <tr>
                <td>{comment.id}</td>
                <td>{comment.hotelId}</td>
                <td>{comment.userId}</td>
                <td>{comment.text}</td>
                <td>{comment.dateCreated}</td>
                <td>
                  <Link to={`/comments/update/${comment.id}`}>
                    <button>Update</button>
                  </Link>
                </td>
                <td>
                  <button onClick={deleteComment}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ListCom;
