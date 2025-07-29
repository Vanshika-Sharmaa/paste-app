// components/ViewPaste.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ViewPaste = () => {
  const { id } = useParams();
  const paste = useSelector(state =>
    state.pastes.find(p => p._id === id)
  );

  if (!paste) return <div className="p-6 text-white text-center">Paste not found.</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-black p-6 text-white">
      <div className="max-w-4xl mx-auto bg-gray-950 p-8 rounded-3xl border border-purple-800 shadow-lg space-y-4">
        <h2 className="text-3xl font-bold text-purple-400 text-center">{paste.title}</h2>
        <p className="text-sm text-gray-400 text-center">
          Created At: {new Date(paste.createdAt).toLocaleString()}
        </p>
        <pre className="bg-gray-900 p-6 rounded-xl text-gray-200 border border-gray-700 whitespace-pre-wrap">
          {paste.content}
        </pre>
      </div>
    </div>
  );
};

export default ViewPaste;
