import Image from 'next/image';
import Link from 'next/link';
import { FaPlay } from 'react-icons/fa';

interface VideoItem {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  uploadDate: string;
  views: string;
  likes: string;
  comments: string;
}

const videos: VideoItem[] = [
  {
    id: 'z-_-kpBZ-6s',
    title: 'Eternal Fire vs. MOUZ | DUST2 HIGHLIGHTS | BLAST Open Lisbon 2025',
    thumbnail: 'https://ext.same-assets.com/2107189163/3374509097.jpeg',
    duration: '14:59',
    uploadDate: '3/29/2025',
    views: '14K',
    likes: '338',
    comments: '148'
  },
  {
    id: '1Mdz35af8i0',
    title: 'Eternal Fire vs. MOUZ | NUKE HIGHLIGHTS | BLAST Open Lisbon 2025',
    thumbnail: 'https://ext.same-assets.com/2107189163/636679954.jpeg',
    duration: '13:09',
    uploadDate: '3/29/2025',
    views: '10K',
    likes: '291',
    comments: '67'
  },
  {
    id: '8majCMxrUHs',
    title: 'VOICECOMMS | Eternal Fire vs. Natus Vincere | BLAST Open Lisbon 2025',
    thumbnail: 'https://ext.same-assets.com/2107189163/2965169449.jpeg',
    duration: '25:09',
    uploadDate: '3/28/2025',
    views: '134K',
    likes: '6.8K',
    comments: '512'
  },
  {
    id: 'D7rVkHIgXXk',
    title: 'VOICECOMMS | Eternal Fire vs. G2 | BLAST Open Lisbon 2025',
    thumbnail: 'https://ext.same-assets.com/2107189163/1381141614.jpeg',
    duration: '26:37',
    uploadDate: '3/27/2025',
    views: '146K',
    likes: '7.2K',
    comments: '466'
  }
];

const VideoSection = () => {
  return (
    <section className="py-16 bg-[#15141a]">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            ETERNAL FIRE <span className="text-primary">VIDEOS</span>
          </h2>
          <Link
            href="https://www.youtube.com/c/EternalFireGG"
            target="_blank"
            className="text-primary font-semibold hover:opacity-80 transition-opacity"
          >
            VIEW ALL
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video) => (
            <Link
              key={video.id}
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              className="group"
            >
              <div className="bg-[#1e1c25] rounded-sm overflow-hidden">
                <div className="relative">
                  {/* Thumbnail */}
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />

                    {/* Duration */}
                    <div className="absolute bottom-2 right-2 bg-black/80 px-1 py-0.5 text-xs text-white">
                      {video.duration}
                    </div>

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                        <FaPlay className="text-black ml-1" />
                      </div>
                    </div>
                  </div>

                  {/* Video Details */}
                  <div className="p-4">
                    <h3 className="text-white text-sm font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                      {video.title}
                    </h3>
                    <div className="mt-2 flex justify-between text-xs text-gray-400">
                      <span>{video.uploadDate}</span>
                      <div className="flex space-x-3">
                        <span>{video.views} Views</span>
                        <span>{video.likes} Likes</span>
                        <span>{video.comments} Comments</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
