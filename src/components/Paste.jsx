// components/Paste.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deletePaste } from '../redux/pasteSlice';
import { toast } from 'react-hot-toast';

const Paste = () => {
  const pastes = useSelector(state => state.pastes);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deletePaste(id));
    toast.success("Paste deleted!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-black p-6 text-white">
      <div className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold text-purple-400 mb-6 text-center">All Pastes</h2>

        {pastes.length === 0 ? (
          <p className="text-center text-gray-400">No pastes available. Create one from the home page.</p>
        ) : (
          <ul className="space-y-4">
            {pastes.map(paste => (
              <li key={paste._id} className="bg-gray-900 p-6 rounded-2xl shadow-lg border border-purple-800">
                <h3 className="text-xl font-semibold text-purple-300">{paste.title}</h3>
                <p className="text-sm text-gray-400 mb-3">
                  Created At: {new Date(paste.createdAt).toLocaleString()}
                </p>
                <div className="flex gap-4">
                  <Link
                    to={`/view/${paste._id}`}
                    className="text-blue-400 hover:underline"
                  >
                    View
                  </Link>
                  <Link
                    to={`/?pasteId=${paste._id}`}
                    className="text-green-400 hover:underline"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(paste._id)}
                    className="text-red-400 hover:underline"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Paste;
