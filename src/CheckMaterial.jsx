import React from 'react';

export default function CheckMaterial() {
  // Mocked list of materials
  const materials = [
    { name: 'Math Notes.pdf', url: '#' },
    { name: 'Science Slides.pptx', url: '#' },
  ];

  return (
    <div className="form-card">
      <h2>Check Material</h2>
      <ul>
        {materials.map((mat, idx) => (
          <li key={idx}>
            <a href={mat.url} download>{mat.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
