import { useEffect, useState } from "react";
import ItemForm from "./components/ItemForm";
import ItemList from "./components/ItemList";
import { getItems, createItem, updateItem, deleteItem } from "./api";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [editItem, setEditItem] = useState(null);

  const loadItems = async () => {
    try {
      const data = await getItems();
      setItems(data);
    } catch (err) {
      console.error("Failed to load items:", err);
    }
  };

  useEffect(() => {
    loadItems();
  }, []);

  const handleSave = async (item) => {
    try {
      if (editItem) {
        await updateItem(editItem._id, item);
        setEditItem(null);
      } else {
        await createItem(item);
      }
      loadItems();
    } catch (err) {
      console.error("Save failed:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteItem(id);
      loadItems();
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  return (
    <div className="container">
      <h1>📝 CRUD Item Manager</h1>
      <ItemForm onSave={handleSave} editItem={editItem} />
      <ItemList items={items} onEdit={setEditItem} onDelete={handleDelete} />
    </div>
  );
}

export default App;
