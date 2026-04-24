import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [task, setTask] = useState([]);

  function DeleteNote(idx) {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
  }

  function submitHandler(e) {
    e.preventDefault();

    if (!title.trim()) return;

    const copyTask = [...task];
    copyTask.push({ title, detail });
    setTask(copyTask);

    setTitle("");
    setDetail("");
  }

  return (
    <div className="min-h-screen bg-white-500 px-4">

      {/* FORM */}
      <form
        onSubmit={submitHandler}
        className="w-full max-w-md mx-auto mt-9 sm:mt-10 text-black bg-gray-200 p-4 sm:p-6 rounded-lg shadow-md flex flex-col gap-3"
      >
        <h1 className="text-xl sm:text-2xl `font`-bold text-center">
          Add Notes
        </h1>

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-white-300 rounded-md p-2 text-sm sm:text-base focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Enter title..."
        />

        <textarea
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
          className="border border-gray-900 rounded-md p-2 text-sm sm:text-base focus:outline-none focus:border-blue-500"
          placeholder="Write details..."
        />

        <button className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 active:scale-95 text-sm sm:text-base">
          Add Note
        </button>
      </form>

      {/* NOTES */}
      <div className=" border  border-gray-300 max-w-6xl mx-auto mt-9 sm:mt-10">
        <h2 className=" mb-8 mt-6 ml-9 text-lg sm:text-xl font-semibold mb-4 px-2">
          My Notes
        </h2>

        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-2">
          {task.map((elem, idx) => (
            <div
              key={idx}
              className="ml-8 mr-8 mb-10 bg-yellow-200 p-4 rounded-lg shadow relative min-h-[140px] bg-[('https://images.rawpixel.com/dark_image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAyL3Y1ODYtdGF1cy0zOS1oYW5kZHJhd253b3Jkc2lkZWEtMTczNi5wbmc.png')]"
            >
              <h3 className="font-bold text-base sm:text-lg break-words">
                {elem.title}
              </h3>

              <p className="text-sm mt-2 break-words">
                {elem.detail}
              </p>

              <button
                onClick={() => DeleteNote(idx)}
                className="absolute bottom-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded hover:bg-red-600 active:scale-95"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default App;