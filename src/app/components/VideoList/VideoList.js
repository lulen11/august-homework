import Image from "next/image";
import styles from "./VideoList.module.scss";

export default function VideoList({
  videos,
  selectedVideo,
  onVideoSelect,
  onFavourite,
}) {
  return (
    <div className={styles.videoList}>
      {videos.map((video) => (
        <div
          key={video.id.videoId}
          className={`${styles.videoItem} ${
            selectedVideo === video.id.videoId ? styles.selected : ""
          }`}
          onClick={() => onVideoSelect(video.id.videoId)}
        >
          <div className={styles.thumb}>
            <Image
              src={video.snippet.thumbnails.default.url}
              alt={video.snippet.title}
              width={400}
              height={300}
              priority
            />
            <button onClick={() => onVideoSelect(video.id.videoId)}>
              &#9658;
            </button>
          </div>
          <h3>{video.snippet.title}</h3>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onFavourite(video);
            }}
          >
            Favourite&nbsp;&nbsp; &#9734;
          </button>
        </div>
      ))}
    </div>
  );
}
