import Button from "../components/Button";
import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <div className="h-full">
      <div className="inside border-b bg-white w-full">
        <SearchBar />
      </div>
      <div className="container p-10  text-dark-brown  bg-white w-full h-full">
        <div className="heading text-xs">
            <h1>Hi, Jane!</h1>
        </div>
        <div className="mood border mt-5 p-5 border-dark-brown rounded-xl w-full text-center">
            <h2>How are you feeling today?</h2>
        </div>
        <Button name="Add entry" className="mt-2" />
        <div className="all-entries mt-10 text-lg">
            <h2><strong>All entries</strong></h2>

        </div>
      </div>
    </div>
  );
};

export default Home;
