import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";

function App() {
  const InputRef = useRef();
  const [audio, setAudio] = useState("212");

  function clickHandler() {
    setAudio(InputRef.current.value);
    InputRef.current.value = "";
  }

  useEffect(() => {
    document.title = "Thai Audio";
  });
  return (
    <div className='h-[100vh] flex flex-col justify-center items-center'>
      <div className='pb-8 flex justify-center items-center gap-4'>
        <input
          type='text'
          ref={InputRef}
          placeholder='Input Audio Number'
          className='border border-black px-4 py-2'
        />
        <button
          onClick={clickHandler}
          className='border border-black bg-black text-white px-4 py-2 rounded-sm hover:bg-white hover:text-black'
        >
          Listen
        </button>
      </div>
      <ReactPlayer
        url={`https://www.everyday-thai.com/learn_thai_online/speak/l${audio}.mp3`}
        width='400px'
        height='50px'
        playing={true}
        controls={true}
      />
    </div>
  );
}

export default App;
