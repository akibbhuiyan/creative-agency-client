import React, { useContext, useState } from "react";
import { UserContext } from "../../../App";
import SideBar from "./../SideBar/SideBar";

const MakeAdmin = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const [admin, setAdmin] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://creative-agency-server-livid.vercel.app/makeAdmin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ adminemail: admin }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("Admin Created SuccesFully");
        }
      });
  };
  return (
    <div className="row">
      <SideBar />
      <div className="col-md-9">
        <div className="d-flex justify-content-between p-4">
          <h3>Order</h3>
          <p>{loggedInUser.name}</p>
        </div>
        <div className="order">
          <form className="addminInput" onSubmit={handleSubmit}>
            <label htmlFor="email" className="mb-2 fw-bold">
              Email
            </label>
            <br />
            <input
              type="email"
              name="email"
              placeholder="jon@gamil.com"
              onChange={(e) => setAdmin(e.target.value)}
            />
            <input type="submit" value="Submit" className="btn btn-success" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
