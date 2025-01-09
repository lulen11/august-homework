"use client";
import { useState, useEffect } from "react";
import styles from "./play.module.scss";
import SearchBar from "../components/SearchBar/SearchBar";
import VideoList from "../components/VideoList/VideoList";
import FaveVideos from "../components/FaveVideos/FaveVideos";
import VideoPlayer from "../components/VideoPlayer/VideoPlayer";

export default function PlayPage() {
  const [query, setQuery] = useState(""); // User input for search
  const [videos, setVideos] = useState([]); // Search results
  const [selectedVideo, setSelectedVideo] = useState(null); // Currently selected video to play
  const [favourites, setFavourites] = useState([]); // Favourites state

  // Handle search and fetch videos from YouTube API
  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&maxResults=10&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`
      );

      if (!response.ok) {
        console.error("Failed to fetch videos");
        return;
      }

      const data = await response.json();
      setVideos(data.items); // Update state with search results
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  // Add a video to favourites and update the state
  const addToFavourites = (video) => {
    const existingFavourites =
      JSON.parse(localStorage.getItem("favourites")) || [];
    const updatedFavourites = [...existingFavourites, video];
    localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
    setFavourites(updatedFavourites); // Update the state after modifying localStorage
    // alert("Added to favourites!");
  };

  // Load favourites from localStorage when the component mounts
  useEffect(() => {
    const storedFavourites =
      JSON.parse(localStorage.getItem("favourites")) || [];
    setFavourites(storedFavourites);
  }, []);

  const removeFromFavourites = (videoId) => {
    const updatedFavourites = favourites.filter(
      (video) => video.id.videoId !== videoId
    );
    setFavourites(updatedFavourites); // Update state
    localStorage.setItem("favourites", JSON.stringify(updatedFavourites)); // Update localStorage
  };

  return (
    <main className={`${styles.page} ${styles.pagePlay}`}>
      <div className={styles.wrapper}>
        <section className={styles.main}>
          <SearchBar
            query={query}
            setQuery={setQuery}
            handleSearch={handleSearch}
          />
          <VideoList
            videos={videos}
            onVideoSelect={setSelectedVideo}
            onFavourite={addToFavourites}
            selectedVideo={selectedVideo}
          />
        </section>
        {(favourites.length > 0 || selectedVideo) && (
          <aside className={styles.sidebar}>
            {selectedVideo && <VideoPlayer videoId={selectedVideo} />}
            {favourites.length > 0 && (
              <FaveVideos
                favourites={favourites}
                onVideoSelect={setSelectedVideo}
                onRemove={removeFromFavourites}
              />
            )}
          </aside>
        )}
      </div>
    </main>
  );
}
