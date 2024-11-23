import React, { useState } from 'react';
import { Play, X } from 'lucide-react';
import Image from "next/image";

const VideoPlayer = ({ video }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative">
      {!isPlaying ? (
        <div className="relative aspect-video">
          <Image
            src={video.thumbnail}
            alt={video.title}
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
          <div 
            className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors cursor-pointer group"
            onClick={() => setIsPlaying(true)}
          >
            <Play className="w-12 h-12 text-white group-hover:scale-110 transition-transform" />
          </div>
        </div>
      ) : (
        <div className="relative aspect-video">
          <button
            onClick={() => setIsPlaying(false)}
            className="absolute top-4 right-4 z-10 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <video
            src={video.url}
            className="w-full h-full rounded-xl"
            controls
            autoPlay
          >
            Your browser does not support the video tag.
          </video>
        </div>
      )}
      <div className="p-4">
        <h4 className="font-semibold">{video.title}</h4>
      </div>
    </div>
  );
};

export default VideoPlayer;