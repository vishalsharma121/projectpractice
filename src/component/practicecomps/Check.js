

import React, { useState } from 'react';

function Check() {
  const [isChecked, setIsChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    setErrorMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isChecked) {
      setErrorMessage('Checkbox is required');
    } else {
      // Your submit logic goes here
    }
  };

  return (
    <>
      <h1>This is heading</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
          Checkbox
        </label>
        {errorMessage ? <div>{errorMessage}</div> : null}
        <br />
        <button type="submit">Submitt</button>
      </form>
    </>
  );
}

export default Check;


// Simple Two

// import React, { useState } from 'react';

// function Check() {
//   const [isChecked, setIsChecked] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleCheckboxChange = () => {
//     setIsChecked(!isChecked);
//     setErrorMessage('');
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (!isChecked) {
//       setErrorMessage('Checkbox is required');
//       return;
//     }
//     // Your submit logic goes here
//   };

//   return (
//     <>
//     <h1>this is heading</h1>
//     <form onSubmit={handleSubmit}>
//       <label>
//         <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
//         Checkbox
//       </label>
//       {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
//       <br />
//       <button type="submit">Submit</button>
//     </form>
//     </>
//   );
// }

// export default Check;
