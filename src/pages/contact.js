import React, { useState, useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import db from "../firebaseConfig";
import "../css/contact.css";

const UserFeedback = () => {
  const [username, setUsername] = useState("");
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(1);
  const [email, setEmail] = useState("");
  const [isEmailChecked, setIsEmailChecked] = useState(false);
  const [loggedInEmail, setLoggedInEmail] = useState("");

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      setLoggedInEmail(user.email || "");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const finalEmail = isEmailChecked ? loggedInEmail : email;

    try {
      await addDoc(collection(db, "userFeedback"), {
        username,
        feedback,
        rating,
        email: finalEmail,
      });

      alert("Feedback submitted successfully!");

      setUsername("");
      setFeedback("");
      setRating(1);
      setEmail("");
      setIsEmailChecked(false);
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Error submitting feedback. Please try again.");
    }
  };

  return (
    <div className="feedback-container">
      <h2>User Feedback Analysis</h2>
      <p>Email yang sedang login: {loggedInEmail}</p>{" "}
      {/* Menampilkan email yang sedang login */}
      <form onSubmit={handleSubmit} className="feedback-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <textarea
          placeholder="Feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          required
        />
        <select
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
        >
          <option value={1}>1 - Very Bad</option>
          <option value={2}>2 - Bad</option>
          <option value={3}>3 - Average</option>
          <option value={4}>4 - Good</option>
          <option value={5}>5 - Excellent</option>
        </select>
        <input
          type="email"
          placeholder="Email"
          value={isEmailChecked ? loggedInEmail : email}
          onChange={(e) => {
            if (!isEmailChecked) {
              setEmail(e.target.value);
            }
          }}
          required
          disabled={isEmailChecked}
        />
        <label>
          <input
            type="checkbox"
            checked={isEmailChecked}
            onChange={(e) => {
              setIsEmailChecked(e.target.checked);
              if (e.target.checked) {
                setEmail(loggedInEmail);
              } else {
                setEmail("");
              }
            }}
          />
          Sesuaikan dengan akun yang login
        </label>
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default UserFeedback;
