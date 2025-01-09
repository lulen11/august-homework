import styles from "./SearchBar.module.scss";

export default function SearchBar({ query, setQuery, handleSearch }) {
  return (
    <>
      <h1 className={styles.heading}>
        Hi August! Here&apos;s a little application that allows you to search
        the YouTube catalogue, play a video, and save a video for later! Start
        searching now!
      </h1>
      <form className={styles.searchBar} onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search YouTube"
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
}
