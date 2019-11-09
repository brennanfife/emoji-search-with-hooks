import React, { useState } from "react";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import EmojiResults from "./components/EmojiResults";

import emojiList from './emojiList.json'

const App = () => {
  constructor(props) {
    super(props);
    this.state = {
      filteredEmoji: filterEmoji("", 20)
    };
  }

  const filterEmoji(searchText, maxResults) {
    return emojiList
      .filter(emoji => {
        if (emoji.title.toLowerCase().includes(searchText.toLowerCase())) {
          return true;
        }
        if (emoji.keywords.includes(searchText)) {
          return true;
        }
        return false;
      })
      .slice(0, maxResults);
  }

  handleSearchChange = event => {
    this.setState({
      filteredEmoji: filterEmoji(event.target.value, 20)
    });
  };

  render() {
    return (
      <div>
        <Header />
        <SearchInput textChange={this.handleSearchChange} />
        <EmojiResults emojiData={this.state.filteredEmoji} />
      </div>
    );
  }
}
