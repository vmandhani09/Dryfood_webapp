"use client";

import { useEffect, useState } from "react";
import React from "react";



export default function UsersPage() {

  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  type User = {
  _id: string;
  fullName: string;
  email: string;
  role: string;
  createdAt?: string;
};

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setLoading(false);
      });
  }, []);

  const filteredUsers = users.filter((user) =>
    (user?.fullName ?? "").toLowerCase().includes((searchQuery ?? "").toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 mt-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-emerald-700">👥 All Users</h1>

      <input
        type="text"
        placeholder="Search by name..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full border rounded p-3 focus:ring focus:ring-emerald-300 mb-4"
      />

      {loading ? (
        <p className="text-center text-lg text-gray-600">Loading users...</p>
      ) : (
        <table className="w-full border-collapse border border-gray-200 shadow-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 p-3">Full Name</th>
              <th className="border border-gray-300 p-3">Email</th>
              <th className="border border-gray-300 p-3">Role</th>
              <th className="border border-gray-300 p-3">Joined</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user._id} className="text-center hover:bg-gray-50">
                <td className="border border-gray-300 p-3">{user?.fullName ?? "No Name Available"}</td>
                <td className="border border-gray-300 p-3">{user.email}</td>
                <td className="border border-gray-300 p-3">{user.role}</td>
                <td className="border border-gray-300 p-3">
                  {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : "No Date Available"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}