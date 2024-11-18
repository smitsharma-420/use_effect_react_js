import React, { useState, useEffect } from "react";
import DynamicData from "./DynamicData";

function CardData() {
  // State to store card data and form input
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({ title: "", description: "", imageUrl: "" });

  // Load data from localStorage when the component loads
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("cardData")) || [];
    setData(savedData);
  }, []);

  // Update form input state
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Add new card data and save to localStorage
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description || !formData.imageUrl) return;

    const updatedData = [...data, formData];
    setData(updatedData);
    localStorage.setItem("cardData", JSON.stringify(updatedData));
    setFormData({ title: "", description: "", imageUrl: "" });
  };

  return (
    <div>
      <h2>Add Card</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" value={formData.title} onChange={handleChange} />
        <input name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
        <input name="imageUrl" placeholder="Image URL" value={formData.imageUrl} onChange={handleChange} />
        <button type="submit">Add</button>
      </form>

      <div className="card-container">
        {data.map((item, index) => (
          <DynamicData key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default CardData;

