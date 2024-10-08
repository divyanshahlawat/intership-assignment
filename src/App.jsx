import React, { useState } from "react";
import "./App.css";

const App = () => {
    const [text, setText] = useState("");
    const [search, setSearch] = useState("");
    const [replace, setReplace] = useState("");
    const [highlightedText, setHighlightedText] = useState(""); // Store the highlighted text

    // Function to handle text input
    const handleTextChange = (e) => {
        setText(e.target.value);
        setHighlightedText(""); // Reset highlight when the text is changed
    };

    // Function to calculate unique word count
    const getUniqueWordCount = () => {
        const wordsArray = text
            .toLowerCase() // Convert to lowercase for case insensitivity
            .replace(/[^\w\s]/g, "") // Remove punctuation
            .split(/\s+/) // Split by one or more spaces
            .filter((word) => word.length > 0); // Filter out empty strings

        const uniqueWords = new Set(wordsArray); // Use Set to get unique words
        return uniqueWords.size; // Return the size of the Set
    };

    // Function to calculate character count (excluding spaces and punctuation)
    const getCharacterCount = () => {
        return text.replace(/[^a-zA-Z0-9]/g, "").length; // Remove non-letters and non-numbers
    };

    // Handle replace functionality and highlight replaced words
    const handleReplace = () => {
        if (!search) return; // If no search term, do nothing

        // Perform case-sensitive replacement
        const newText = text.split(search).join(replace);
        setText(newText);

        // Highlight the replaced words
        const highlighted = newText.split(replace).join(
            `<span class="highlight">${replace}</span>`
        );
        setHighlightedText(highlighted); // Store the highlighted version
    };

    return (
        <div className="app-container">
            <h1>Real-Time Text Analysis</h1>

            {/* Textarea for input */}
            <textarea
                className="text-input"
                value={text}
                onChange={handleTextChange}
                rows="10"
                placeholder="Type or paste your text here..."
            />

            {/* Statistics */}
            <div className="statistics">
                <p>Unique Words: {getUniqueWordCount()}</p>
                <p>Character Count (Excluding Spaces and Punctuation): {getCharacterCount()}</p>
            </div>

            {/* String Replacement Section */}
            <div className="replace-section">
                <input
                    type="text"
                    placeholder="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Replace"
                    value={replace}
                    onChange={(e) => setReplace(e.target.value)}
                />
                <button onClick={handleReplace}>Replace All</button>
            </div>

            {/* Display text with highlighting */}
            {highlightedText && (
                <div
                    className="highlighted-output"
                    dangerouslySetInnerHTML={{ __html: highlightedText }}
                ></div>
            )}
        </div>
    );
};

export default App;
