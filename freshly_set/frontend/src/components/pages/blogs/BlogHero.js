import React, { useRef, useState } from 'react'

function BlogHero() {
    const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMuteUnmute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };
  return (
    <div className="mt-[75px] relative h-[434px] lg:h-[720px] lg:w-[100%]  grayscale bg-cover bg-no-repeat mix-blend-luminosity ">
        

        <video
        ref={videoRef}
        className="w-full h-full object-cover"
        src="/static/media/BlogHero.mp4"
        muted={isMuted}
        autoPlay
        loop
      ></video>
    

    <button            
     onClick={handlePlayPause}
    className="absolute bottom-[16px] lg:bottom-[66px] right-[95px] lg:right-[40%] mx-auto w-[227px] lg:w-[344px] h-[53px] lg:h-[74px] bg-gray-300/[0.65] rounded-[15px] border-none text-black text-[30px] font-inter font-[900] cursor-pointer">            {isPlaying ? 'Pause' : 'Play'}    Video
    </button>
    <img            
    onClick={handleMuteUnmute}
    className="absolute bottom-[66px] right-[136px] h-[90px] w-[90px] cursor-pointer" src="/static/media/mute.png" alt="Mute button"/>

</div>
  )
}

export default BlogHero