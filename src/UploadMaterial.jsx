import React, { useRef } from 'react';

export default function UploadMaterial() {
  const fileInput = useRef();

  const handleUpload = (e) => {
    e.preventDefault();
    alert('Material uploaded (mock)!');
    fileInput.current.value = '';
  };

  return (
    <div className="form-card">
      <h2>Upload Material</h2>
      <form onSubmit={handleUpload}>
        <input type="file" ref={fileInput} required />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}
