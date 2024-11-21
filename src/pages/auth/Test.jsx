import React, { useState } from 'react';

const ImageUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [base64Image, setBase64Image] = useState('');
  const [preview, setPreview] = useState('');

  // Convert image to Base64
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) {
      alert('Please select a file!');
      return;
    }

    // Validate file size (1MB limit)
    const maxSizeInBytes = 1 * 1024 * 1024; // 1MB
    if (file.size > maxSizeInBytes) {
      alert('File size exceeds 1MB!');
      return;
    }

    setSelectedFile(file);

    // Use FileReader to convert file to Base64
    const reader = new FileReader();
    reader.onload = () => {
      const base64String = reader.result;
      setBase64Image(base64String); // Save Base64 string in state
      setPreview(base64String); // Set image preview
    };
    reader.readAsDataURL(file); // Convert file to Base64
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert('No file selected!');
      return;
    }

    const payload = {
      name: selectedFile.name,
      image: base64Image,
    };

    console.log(payload);
    

    // try {
    //   const response = await fetch('http://localhost:3000/images', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(payload),
    //   });
    //   const result = await response.json();
    //   if (response.ok) {
    //     alert('Image uploaded successfully!');
    //     console.log('Response:', result);
    //   } else {
    //     alert(`Error: ${result.message}`);
    //     console.error(result);
    //   }
    // } catch (error) {
    //   console.error('Upload failed:', error);
    // }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Upload Image</h2>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {preview && (
        <div style={{ marginTop: '20px' }}>
          <h4>Preview:</h4>
          <img
            src={preview}
            alt="Preview"
            style={{ width: '200px', height: 'auto', border: '1px solid #ccc' }}
          />
        </div>
      )}
      <button
        onClick={handleUpload}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Upload
      </button>
    </div>
  );
};

export default ImageUploader;
