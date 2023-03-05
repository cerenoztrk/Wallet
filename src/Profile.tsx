import React, { useState, useEffect } from "react";
import Sidebar from "./Components/Sidebar";
import axios from "axios";

interface UserCard {
  name: string;
  surname: string;
  phone: string;
  email: string;
  password: string;
}

const Profile: React.FC = () => {
  const [userCards, setUserCards] = useState<UserCard[]>([]);

  useEffect(() => {
    axios
      .get<UserCard[]>("http://localhost:5266/api/Users")
      .then((response) => {
        const data = response.data as UserCard[];
        setUserCards(data);
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div className="profile-container">
        {userCards.map((userCard, index) => (
          <div key={index} className="profile-card">
            <h2>Profile Information</h2>
            <h3>
              Name: {userCard.name} {userCard.surname}
            </h3>
            <p>Phone: {userCard.phone}</p>
            <p>Email: {userCard.email}</p>
            <p>Password: {userCard.password}</p>
          </div>
        ))}
      </div>
      <Sidebar />
    </>
  );
};

export default Profile;
