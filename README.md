## KONOHA BANK

The Transaction Tracker App is a web application that allows users to manage their transactions effectively. It provides a user-friendly interface where users can view a table of all transactions, add new transactions, and filter transactions based on description. Additionally, the app offers bonus features like sorting transactions alphabetically and deleting transactions from the table.

## Getting Started

To run the React Todo App on your local machine, follow these steps:

1. Clone the repository: git clone https://github.com/your-username/react-todo-app.git
2. Navigate to the project directory: cd react-todo-app
3. Install dependencies: npm install
4. Navigate to srce/data to start the server : json-server --watch ./src/data/db.json
5. Start the development server: npm start
6. Open your browser and go to http://localhost:3000 to view the app.


# <ins>Components Overview</ins>
1. App
   This code represents a React application called "KONOHA BANK," which allows users to manage their transactions. Here's a description of what the code does:

1. State Management:
   The code uses the useState hook to manage various states, including transactions, watchedByEffect, showForm, searchInput, theme, and bodyBgc.

1. Theme Management:
   The app supports a light/dark theme toggle using the ReactSwitch component from the "react-switch" library.
   When the theme is toggled, the toggleSwitchHandler function is called to change the theme and apply corresponding styles to the body.

1. Data Fetching:
   The code fetches transaction data from the server using the fetch API inside the useEffect hook with a dependency on watchedByEffect. The fetched data is stored in the transactions state.

1. Transaction Management:
   The app displays a table of all transactions using the TransactionList component.
   The TransactionList component is responsible for rendering the transactions and provides functionality to filter transactions based on the searchInput state.
   Users can delete transactions by clicking the delete button, which triggers the onDeleteTransaction function.

1. Form Handling:
   The app supports adding new transactions using the TransactionForm component.
   When the "Add Transaction" button is clicked, the addTransaction function toggles the display of the form.
   Users can input transaction details in the form and submit it. The PostFormObjectToServer function sends a POST request to the server with the form data to add a new transaction.

1. Context API:
   The app uses the createContext function to create a themeContext, which is later used to provide the theme value to child components via the themeContext.Provider.
   Components consuming the themeContext will receive the current theme value to apply appropriate styling.