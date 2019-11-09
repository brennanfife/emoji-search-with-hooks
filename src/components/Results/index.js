import React from "react";

import ResultsRow from "../ResultsRow";

const Results = ({ emojiData } ) => {
  return (
    <div>
      {emojiData.map(emojiData => (
        <ResultsRow
          key={emojiData.title}
          symbol={emojiData.symbol}
          title={emojiData.title}
        />
      ))}
    </div>
  );
}

export default Results