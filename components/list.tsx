import Link from "next/link";
import styles from "./list.module.css";
import React from "react";

export default function List({ places }) {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  React.useEffect(() => {
    if (places) {
      const results = places.filter((place) =>
        place.name.toLowerCase().includes(searchTerm)
      );
      setSearchResults(results);
    }
  }, [searchTerm]);

  return (
    <div className={styles.container}>
      <input
        type="text"
        name="search"
        placeholder="Search places"
        className={styles.search}
        value={searchTerm}
        onChange={handleChange}
        autoComplete="off"
      />
      <div className={styles.results}>
        {searchResults.map(({ id, name }) => (
          <Link href="/places/[id]" as={`/places/${id}`} key={id}>
            <a className={styles.place}>{name}</a>
          </Link>
        ))}
      </div>
    </div>
  );
}
