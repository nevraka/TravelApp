import React from 'react';
import { Link } from 'react-router-dom';

function FormCom({ handleSubmit, comment, setComment, buttonText }) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Hotel ID
          <input
            type="text"
            value={comment.hotelId}
            onChange={(e) =>
              setComment({ ...comment, hotelId: e.target.value })
            }
          />
        </label>
        <br />
        <label>
          User ID
          <input
            type="text"
            value={comment.userId}
            onChange={(e) => setComment({ ...comment, userId: e.target.value })}
          />
        </label>
        <br />
        <label>
          Text
          <input
            type="text"
            value={comment.text}
            onChange={(e) => setComment({ ...comment, text: e.target.value })}
          />
        </label>
        <br />
        <label>
          Date
          <input
            type="text"
            value={comment.dateCreated}
            onChange={(e) =>
              setComment({ ...comment, dateCreated: e.target.value })
            }
          />
        </label>
        <input type="submit" value={buttonText} />
        <Link to="/">
          <button>Back</button>
        </Link>
      </form>
    </div>
  );
}

export default FormCom;
