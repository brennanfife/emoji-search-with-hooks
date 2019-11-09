import React from "react";
import "./ResultsRow.css";

const ResultsRow = ({ symbol, title }) => {
    const codePointHex = symbol.codePointAt(0).toString(16);
    const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
    return (
      <div
        className="result-row"
        data-clipboard-text={symbol}
      >
        <img alt={title} src={src} />
        <span className="title">{title}</span>
      </div>
    );
}

export default ResultsRow