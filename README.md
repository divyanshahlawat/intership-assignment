This project is a React-based application that provides real-time text analysis, including counting unique words, counting characters (excluding spaces and punctuation), and string replacement functionality. Additionally, words that are replaced can be optionally highlighted in the text.

Features
Unique Word Count: Displays the number of unique words, treating words case-insensitively (e.g., "Hello" and "hello" are considered the same word).
Character Count (Excluding Spaces and Punctuation): Shows the number of characters, excluding spaces and punctuation, and only counts letters and numbers.
String Replacement: Allows users to input a string to search for and a string to replace it with. Clicking the "Replace All" button will replace all occurrences of the first string with the second string. Replacement is case-sensitive.
Bonus Feature (Optional): Replaced words are highlighted in the text after the replacement.
Technologies Used
React (with functional components and hooks)
JavaScript (ES6+)
CSS for styling and responsiveness
Getting Started
Prerequisites
To run this project locally, ensure that you have:

Node.js installed (version 14+)
npm (Node package manager) or yarn
Installation
Clone this repository to your local machine:

cd text-analysis-replacement-app
Install the required dependencies:

bash
Copy code
npm install
or

bash
Copy code
yarn install
Running the Project Locally
Once dependencies are installed, you can run the development server:

bash
Copy code
npm start
or

bash
Copy code
yarn start
This will launch the app at http://localhost:3000/ in your browser.

How to Use
Enter Text: Use the large textarea provided to input or type any text. The statistics will update in real-time.
Unique Word and Character Count: The app will display the number of unique words and the number of characters (excluding spaces and punctuation) dynamically as you type.
String Replacement: Enter the string you want to search for in the first input field, and the string you want to replace it with in the second input field. Click the "Replace All" button to perform the replacement.
Highlighting (Optional Feature): Replaced words will be highlighted after performing the replacement.
Hosting
This project can be deployed using services like Vercel, Netlify, or GitHub Pages for easy access. Here's an example to deploy on Vercel:

Sign in to Vercel.
Create a new project and import your GitHub repository.
Follow the prompts to deploy. Your project will be live shortly!
