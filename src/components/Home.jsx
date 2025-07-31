// components/Home.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { addToPastes, updateToPastes } from "../redux/pasteSlice";
import { toast } from 'react-hot-toast';

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");

  function createPaste() {
    const paste = {
      title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    };
    if (pasteId) {
      dispatch(updateToPastes(paste));
      toast.success("Paste updated!");
    } else {
      dispatch(addToPastes(paste));
      toast.success("Paste created!");
    }

    setTitle('');
    setValue('');
    setSearchParams({});
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-purple-800 to-purple-900 flex items-center justify-center px-4">
      <div className="w-full max-w-3xl bg-gray-950 text-white p-8 rounded-3xl shadow-2xl space-y-6 border border-purple-700">
        
        <h2 className="text-2xl font-bold text-center text-purple-400 mb-4">
          {pasteId ? "Update Your Paste" : "Create a New Paste"}
        </h2>

        <div className="flex flex-col space-y-2">
          <label className="text-md font-medium text-gray-300">Title</label>
          <input
            className="p-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter cdtitle"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-md font-medium text-gray-300">Content</label>
          <textarea
            className="p-4 rounded-xl bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter the content here..."
            rows={10}
          />
        </div>

        <div className="text-right">
          <button
            onClick={createPaste}
            className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-xl font-semibold transition duration-300"
          >
            {pasteId ? "Update Paste" : "Create My Paste"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
