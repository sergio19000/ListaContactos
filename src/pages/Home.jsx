import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  const handleDelete = (id) => {
    dispatch({ type: "delete_contact", payload: { id } });
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1>Contacts</h1>
        <Link to="/demo">
          <button className="btn btn-success">+ Add contact</button>
        </Link>
      </div>

      {store.contacts.length === 0 ? (
        <p className="text-muted">No contacts yet. Add one!</p>
      ) : (
        store.contacts.map((c) => (
          <div key={c.id} className="d-flex align-items-center justify-content-between border-bottom py-3">
            <div className="d-flex align-items-center gap-3">
              <div
                style={{
                  width: 56, height: 56, borderRadius: "50%",
                  background: "#c8d4e0", display: "flex",
                  alignItems: "center", justifyContent: "center",
                  fontSize: 20, fontWeight: 500, color: "#fff"
                }}
              >
                {c.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <p className="mb-0 fw-semibold">{c.name}</p>
                <small className="text-muted">📍 {c.address}</small><br />
                <small className="text-muted">📞 {c.phone}</small><br />
                <small className="text-muted">✉️ {c.email}</small>
              </div>
            </div>
            <div className="d-flex gap-2">
              <Link to={`/edit/${c.id}`}>
                <button className="btn btn-sm btn-outline-secondary">✏️</button>
              </Link>
              <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(c.id)}>🗑️</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};