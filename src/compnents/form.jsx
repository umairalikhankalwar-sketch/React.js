
import { useState } from "react";
import "./from.css";

function Lpp() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [number, setNumber] = useState("");
  const [gmail, setGmail] = useState("");
  const [caste, setCaste] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    alert("Form Submitted Successfully!");
  }

  return (
    <div className="ui">
      <h1>Student Form</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          required
        />
        <h2>Your Name: {name}</h2>

        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Enter your Age"
          required
          min="1"
        />
        <h2>Your Age: {age}</h2>

        <input
          type="tel"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Enter your number"
          required
        />
        <h2>Your Number: {number}</h2>

        <input
          type="email"
          value={gmail}
          onChange={(e) => setGmail(e.target.value)}
          placeholder="Enter your Gmail"
          required
        />
        <h2>Your Gmail: {gmail}</h2>

        <input
          type="text"
          value={caste}
          onChange={(e) => setCaste(e.target.value)}
          placeholder="Enter your caste"
          required
        />
        <h2>Your Caste: {caste}</h2>

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
          minLength="6"
        />

        <button className="buttonn"    type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Lpp;
