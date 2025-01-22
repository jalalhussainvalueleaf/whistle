import React from "react";

export default function Button({ btnName }) {
  return (
    <div className="flex justify-center">
      <button
        type="submit"
        className="rounded-full bg-wlOrange px-8 py-2 text-white"
      >
        {btnName}
      </button>
    </div>
  );
}
