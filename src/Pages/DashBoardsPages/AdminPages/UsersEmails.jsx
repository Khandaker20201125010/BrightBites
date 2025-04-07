import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import { FaEnvelope, FaClock } from 'react-icons/fa';

const UsersEmails = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get('http://localhost:5000/contact'); // Update when deployed
        setMessages(res.data);
      } catch (err) {
        console.error("Error fetching messages:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  if (loading) return <p className="text-center mt-10 text-lg font-semibold text-gray-600">Loading messages...</p>;

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-cyan-600">User Contact Messages</h2>

      <div className="grid gap-6 max-h-[600px] overflow-y-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3 text-gray-600">
                <FaEnvelope className="text-cyan-500" />
                <p className="text-sm sm:text-base font-medium">{msg.email}</p>
              </div>
              <span className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-xs font-semibold">
                {moment(msg.createdAt).fromNow()}
              </span>
            </div>

            <h3 className="text-lg font-bold text-gray-800 mb-2">{msg.subject}</h3>
            <p className="text-gray-700">{msg.message}</p>

            <div className="flex items-center gap-2 text-sm text-gray-500 mt-4">
              <FaClock className="text-blue-400" />
              <span>{moment(msg.createdAt).format("MMMM Do YYYY, h:mm A")}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersEmails;
