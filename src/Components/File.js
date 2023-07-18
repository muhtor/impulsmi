import React from 'react'



const onError = (e) => {
    console.log(e, "error in file-viewer");
};

function File() {
  return (
    <>
        <iframe className='tashqi_savdo_pdf' src="https://firebasestorage.googleapis.com/v0/b/books-b4672.appspot.com/o/enzyme%2F1.pdf?alt=media&token=e6b5282e-7f34-4086-b121-944dcf630078"></iframe>
    </>
  )
}

export default File
