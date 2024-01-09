import React from "react";

export default function LoadingButton({ type, loading, children }) {
  return (
    <button type={type} className="btn btn-primary text-white">
      {loading ? (
        <span className="loading loading-dots loading-sm"></span>
      ) : (
        children
      )}
    </button>
  );
}
