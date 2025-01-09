import styles from "./VideoPlayer.module.scss";

export default function VideoPlayer({ videoId }) {
  return (
    <div className={styles.videoPlayer}>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        allowFullScreen
        title="YouTube Video Player"
      ></iframe>
    </div>
  );
}
