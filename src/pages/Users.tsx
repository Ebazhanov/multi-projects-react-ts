import React from "react";
import { Skeleton } from "../components/users/Skeleton";
import { User } from "../components/users/User";
import "./Users.scss";

interface Props {
  items?: any;
  isLoading?: any;
}

export const UsersSearch = () => {
  return (
    <div className="users-main">
      <Users />
      {/*      <Success />*/}
    </div>
  );
};

const Users = ({ items, isLoading }: Props) => {
  return (
    <>
      <div className="search">
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
        </svg>
        <input type="text" placeholder="Search for user ..." />
      </div>
      {isLoading ? (
        <div className="skeleton-list">
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        <ul className="users-list">
          <User />
        </ul>
      )}
      <button className="send-invite-btn">Send invitation</button>
    </>
  );
};
