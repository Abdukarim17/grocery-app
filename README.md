**Grocery List App**
A dynamic grocery list application built with React and React-Router-Dom that allows users to efficiently manage their shopping lists. The app integrates with a mock API using db.json for real-time data fetching and updating, ensuring seamless synchronization across the application.

**Features**
Add items: Users can add new grocery items to their shopping list.
Delete items: Remove unwanted items from the list.
Mark items as purchased: Track purchased items with a single click.
Persistent data: Real-time synchronization of item data using a mock API with db.json.
Dynamic Routing: React-Router is used to provide a smooth navigation experience between different pages of the app.
Technologies Used
React: A JavaScript library for building user interfaces.
React-Router-Dom: Used for dynamic routing to enhance the navigation experience within the app.
db.json: A simple mock database used to store and retrieve grocery items.
JavaScript: Main programming language used for logic and interactivity.
Installation
To run this project locally, follow these steps:

**Clone the repository:**

bash
Copy code
git clone https://github.com/your-username/grocery-list-app.git
Navigate to the project directory:

bash
Copy code
cd grocery-list-app
Install the dependencies:

bash
Copy code
npm install
Start the JSON server (to simulate the backend):

bash
Copy code
npx json-server --watch db.json --port 5000
Run the app:

bash
Copy code
npm start
The app will open in your browser at http://localhost:3000.

Project Structure
java
Copy code
├── public
│   └── index.html
├── src
│   ├── components
│   │   └── ListItem.js
│   ├── pages
│   │   └── Home.js
│   ├── App.js
│   ├── index.js
│   └── db.json
├── package.json
└── README.md
components/: Contains reusable components such as the ListItem component.
pages/: Contains different pages of the application (e.g., Home).
db.json: Simulates a backend database to store and retrieve grocery list items.
Usage
Open the app in your browser.
Use the form to add new grocery items.
View your current list of items.
Mark items as purchased or remove them from the list.
The app automatically synchronizes your actions with the mock API (db.json).
