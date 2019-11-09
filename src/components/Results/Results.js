import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import EmojiResultRow from "./EmojiResultRow";

export default class EmojiResults extends PureComponent {
  static propTypes = {
    emojiData: PropTypes.array
  };

  render() {
    return (
      <div>
        {this.props.emojiData.map(emojiData => (
          <EmojiResultRow
            key={emojiData.title}
            symbol={emojiData.symbol}
            title={emojiData.title}
          />
        ))}
      </div>
    );
  }
}