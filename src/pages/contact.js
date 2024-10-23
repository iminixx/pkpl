import React, { useState, useEffect } from "react";
import { collection, addDoc } from "firebase/firestore"; // Impor Firestore
import { getAuth } from "firebase/auth"; // Impor getAuth dari Firebase
import db from "../firebaseConfig"; // Sesuaikan dengan konfigurasi Firebase Anda
import "../css/contact.css";

const UserFeedback = () => {
  const [username, setUsername] = useState(""); // State untuk username
  const [feedback, setFeedback] = useState(""); // State untuk feedback
  const [rating, setRating] = useState(1); // State untuk rating
  const [email, setEmail] = useState(""); // State untuk email
  const [isEmailChecked, setIsEmailChecked] = useState(false); // State untuk checkbox
  const [loggedInEmail, setLoggedInEmail] = useState(""); // State untuk email pengguna

  useEffect(() => {
    const auth = getAuth(); // Mengambil instance auth
    const user = auth.currentUser; // Mendapatkan pengguna yang sedang login

    if (user) {
      setLoggedInEmail(user.email || ""); // Set email pengguna yang login
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Mencegah reload halaman saat submit

    // Jika checkbox dicentang, gunakan email yang terdaftar
    const finalEmail = isEmailChecked ? loggedInEmail : email;

    try {
      // Menambahkan dokumen baru ke koleksi userFeedback
      await addDoc(collection(db, "userFeedback"), {
        username,
        feedback,
        rating,
        email: finalEmail, // Menggunakan email yang sesuai
      });

      alert("Feedback submitted successfully!"); // Notifikasi sukses

      // Reset state setelah pengiriman berhasil
      setUsername("");
      setFeedback("");
      setRating(1);
      setEmail("");
      setIsEmailChecked(false);
    } catch (error) {
      console.error("Error adding document: ", error); // Menampilkan kesalahan di console
      alert("Error submitting feedback. Please try again."); // Notifikasi kesalahan
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
          value={isEmailChecked ? loggedInEmail : email} // Gunakan email saat checkbox dicentang
          onChange={(e) => {
            if (!isEmailChecked) {
              setEmail(e.target.value);
            }
          }}
          required
          disabled={isEmailChecked} // Disable input jika checkbox dicentang
        />
        <label>
          <input
            type="checkbox"
            checked={isEmailChecked}
            onChange={(e) => {
              setIsEmailChecked(e.target.checked);
              if (e.target.checked) {
                setEmail(loggedInEmail); // Set email ke email yang login jika dicentang
              } else {
                setEmail(""); // Kosongkan email jika tidak dicentang
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
