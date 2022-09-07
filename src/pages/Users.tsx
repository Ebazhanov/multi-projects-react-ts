import React, { ChangeEvent, useEffect, useState } from "react";
import { Skeleton } from "../components/users/Skeleton";
import { User } from "../components/users/User";
import "./Users.scss";

export const UsersSearch = () => {
  const [users, setUsers] = useState([]);
  const [invites, setInvites] = useState([0]);
  const [isLoading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((json) => setUsers(json.data))
      .catch((err) => {
        console.warn(err);
        alert("Error while fetching user");
      })
      .finally(() => setLoading(false));
  }, []);

  const onChangeSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const onClickInvite = (id: any) => {
    if (invites.includes(id)) {
      setInvites((prev) => prev.filter((_id: any) => _id !== id));
    } else {
      setInvites((prev) => [...prev, id]);
    }
  };

  return (
    <div className="users-main">
      <Users
        onChangeSearchValue={onChangeSearchValue}
        searchValue={searchValue}
        items={users}
        isLoading={isLoading}
        invites={invites}
        onClickInvite={onClickInvite}
      />
      {/*      <Success />*/}
    </div>
  );
};

interface UsersProps {
  items: any;
  isLoading: boolean;
  searchValue: string;
  onChangeSearchValue: (event: ChangeEvent<HTMLInputElement>) => void;
  invites: any;
  onClickInvite: (id: any) => void;
}

const Users = ({
  items,
  isLoading,
  onChangeSearchValue,
  searchValue,
  invites,
  onClickInvite,
}: UsersProps) => {
  return (
    <>
      <div className="search">
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
        </svg>
        <input
          value={searchValue}
          onChange={onChangeSearchValue}
          type="text"
          placeholder="Search for user ..."
        />
      </div>
      {isLoading ? (
        <div className="skeleton-list">
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        <ul className="users-list">
          {items
            .filter((obj: any) => {
              const fullName = (obj.first_name + obj.last_name).toLowerCase();
              return (
                fullName.includes(searchValue.toLowerCase()) ||
                obj.email.toLowerCase().includes(searchValue.toLowerCase())
              );
            })
            .map((obj: any) => (
              <User
                onClickInvite={onClickInvite}
                isInvited={invites.includes(obj.id)}
                key={obj.id}
                {...obj}
              />
            ))}
        </ul>
      )}
      <button className="send-invite-btn">Send invitation</button>
    </>
  );
};
