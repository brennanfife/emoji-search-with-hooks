import React, { useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Results from "./components/Results";
import filterEmoji from "./filterEmoji";

const App = () => {
  const initialState = filterEmoji("", 20)
  const [filteredEmoji, setFilteredEmoji] = useState(initialState)

  const handleSearchChange = event => {
    setFilteredEmoji(filterEmoji(event.target.value, 20))
  };

  return (
    <div>
      <Header />
      <Search textChange={handleSearchChange} />
      <Results emojiData={filteredEmoji} />
    </div>
  );
}

export default App