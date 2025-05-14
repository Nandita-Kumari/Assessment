const ItemList = ({ items, onEdit, onDelete }) => {
    return (
      <div className="item-list">
        {items.length === 0 ? (
          <p>No items available.</p>
        ) : (
          items.map((item) => (
            <div key={item._id} className="item-card">
              <div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
              <div>
                <button onClick={() => onEdit(item)} className="edit-btn">Edit</button>
                <button onClick={() => onDelete(item._id)} className="delete-btn">Delete</button>
              </div>
            </div>
          ))
        )}
      </div>
    );
  };
  
  export default ItemList;
  