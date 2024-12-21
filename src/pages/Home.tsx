import { useEffect, useState } from "react";
import Button from "../components/Button";
import JournalEntry from "../components/JournalEntry";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const fetchAllEntries = async () => {
      const result = await fetch("http://localhost:8080/entry");
      const jsonResult = await result.json();
      setEntries(jsonResult);
    };
    fetchAllEntries();
  }, []);

  return (
    <div className="h-full">
      <div className="inside border-b bg-white w-full">
        <SearchBar />
      </div>
      <div className="p-10  text-dark-brown  bg-white w-full h-full">
        <div className="heading text-xs">
          <h1>Hi!</h1>
        </div>
        <div className="mood border mt-5 p-5 border-dark-brown rounded-xl w-full text-center">
          <h2>How are you feeling today?</h2>
        </div>
        <Button name="Add an entry" className="mt-2" />
        <div className="all-entries mt-10 text-lg">
          <h2 className="mb-2">
            <strong>All entries</strong>
          </h2>
          <div className="all-container grid grid-cols-3">
            {entries.map((entry) => (
              <JournalEntry entry={entry} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
