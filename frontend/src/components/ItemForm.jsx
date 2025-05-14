import { useState, useEffect } from "react";

const ItemForm = ({ onSave, editItem }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editItem) {
      setName(editItem.name);
      setDescription(editItem.description);
    } else {
      setName("");
      setDescription("");
    }
  }, [editItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description) return alert("All fields are required");
    onSave({ name, description });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Item name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Item description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">
        {editItem ? "Update Item" : "Add Item"}
      </button>
    </form>
  );
};

export default ItemForm;
