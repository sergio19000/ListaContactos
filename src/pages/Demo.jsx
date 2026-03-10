// Import necessary components from react-router-dom and other parts of the application.
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.

export const Demo = () => {
  // Access the global state and dispatch function using the useGlobalReducer hook.
  const { store, dispatch } = useGlobalReducer()

  return (
    <div className="container">
      <h1>Add a new contact</h1>
        <div className="hoja">
          <label for="nombre">Full Name</label>
          <input type="text" id="nombre" name="nombre"></input>

          <label for="email">Email</label>
          <input type="text" id="email" name="email"></input>

          <label for="phone">Phone</label>
          <input  id="Phone" name="Phone"></input>

          <label for="Adress">Adress</label>
          <input type="text" id="Adress" name="Adress"></input>
        </div>
      <br />
        <button className="btn btn-primary">Save</button>
      <Link to="/">
        <button className="btn">Get back to contacts</button>
      </Link>
    </div>
  );
};
