import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Demo = () => {
  const { dispatch, store } = useGlobalReducer();
  const navigate = useNavigate();
  const { id } = useParams();  // si existe, es modo edición

  const [form, setForm] = useState({
    nombre: "", email: "", phone: "", address: ""
  });

  useEffect(() => {
    if (id) {
      const contact = store.contacts.find(c => c.id === Number(id));
      if (contact) {
        setForm({
          nombre: contact.name,
          email: contact.email,
          phone: contact.phone,
          address: contact.address
        });
      }
    }
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (!form.nombre.trim()) return;

    if (id) {
      dispatch({
        type: "edit_contact",
        payload: {
          id: Number(id),
          name: form.nombre,
          email: form.email,
          phone: form.phone,
          address: form.address
        }
      });
    } else {
      dispatch({
        type: "add_contact",
        payload: {
          name: form.nombre,
          email: form.email,
          phone: form.phone,
          address: form.address
        }
      });
    }
    navigate("/");
  };

  return (
    <div className="container">
      <h1>{id ? "Edit contact" : "Add a new contact"}</h1>
      <div className="hoja">
        <label>Full Name</label>
        <input type="text" name="nombre" value={form.nombre} onChange={handleChange} />

        <label>Email</label>
        <input type="text" name="email" value={form.email} onChange={handleChange} />

        <label>Phone</label>
        <input type="text" name="phone" value={form.phone} onChange={handleChange} />

        <label>Address</label>
        <input type="text" name="address" value={form.address} onChange={handleChange} />
      </div>
      <br />
      <button className="btn btn-primary" onClick={handleSave}>Save</button>
      <Link to="/">
        <button className="btn">Get back to contacts</button>
      </Link>
    </div>
  );
};