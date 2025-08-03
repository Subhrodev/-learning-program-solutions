import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Validate fields on change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    // field-wise validation
    let errorMsg = "";

    if (name === "name") {
      errorMsg = value.length < 5 ? "Name must be at least 5 characters." : "";
    }
    if (name === "email") {
      errorMsg = !value.includes("@") || !value.includes(".")
        ? "Email must contain @ and ."
        : "";
    }
    if (name === "password") {
      errorMsg = value.length < 8 ? "Password must be at least 8 characters." : "";
    }

    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  // Validate all fields on submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const nameError =
      formData.name.length < 5 ? "Name must be at least 5 characters." : "";
    const emailError =
      !formData.email.includes("@") || !formData.email.includes(".")
        ? "Email must contain @ and ."
        : "";
    const passwordError =
      formData.password.length < 8
        ? "Password must be at least 8 characters."
        : "";

    setErrors({
      name: nameError,
      email: emailError,
      password: passwordError,
    });

    // If no errors, submit form
    if (!nameError && !emailError && !passwordError) {
      alert(`Registration Successful!\nName: ${formData.name}\nEmail: ${formData.email}`);
      setFormData({ name: "", email: "", password: "" });
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>Mail Register App</h2>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div style={{ marginBottom: "15px" }}>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
            style={{ padding: "8px", width: "250px" }}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </div>

        {/* Email */}
        <div style={{ marginBottom: "15px" }}>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            style={{ padding: "8px", width: "250px" }}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>

        {/* Password */}
        <div style={{ marginBottom: "15px" }}>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            style={{ padding: "8px", width: "250px" }}
          />
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        </div>

        <button type="submit" style={{ padding: "10px 20px" }}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
