import Image from "next/image";
import styles from "./FaveVideos.module.scss";

export default function FaveVideos({ favourites, onVideoSelect, onRemove }) {
  return (
    <div className={styles.favourites}>
      <h2>Your favourites to come back to:</h2>
      {favourites.length === 0 ? (
        <p>
          Uh oh. No favourites are here yet. Add some videos to your list of
          favourites!
        </p>
      ) : (
        favourites.map((video) => (
          <div key={video.id.videoId} className={styles.favouritesItem}>
            {/* <img
              src={video.snippet.thumbnails.default.url}
              alt={video.snippet.title}
            /> */}

            <Image
              src={video.snippet.thumbnails.default.url}
              alt={video.snippet.title}
              width={100}
              height={100}
              priority
            />
            <h3>{video.snippet.title}</h3>
            <button onClick={() => onVideoSelect(video.id.videoId)}>
              Play&nbsp;&nbsp; &#9658;
            </button>
            <button onClick={() => onRemove(video.id.videoId)}>
              Remove&nbsp;&nbsp; &#9733;
            </button>
          </div>
        ))
      )}
    </div>
  );
}
