## KONOHA BANK

The Transaction Tracker App is a web application that allows users to manage their transactions effectively. It provides a user-friendly interface where users can view a table of all transactions, add new transactions, and filter transactions based on description or category. Additionally, the app offers bonus features like sorting transactions alphabetically by categor, description or amount and deleting transactions from the table.

## Getting Started

To run the React Todo App on your local machine, follow these steps:

1. Clone the repository: git clone https://github.com/your-username/react-todo-app.git
2. Navigate to the project directory: cd react-todo-app
3. Install dependencies: `npm install`
4. Navigate to `src/data` to start the server : `json-server --watch ./src/data/db.json`
5. Start the development server: `npm start`
6. Open your browser and go to `http://localhost:3000 `to view the app.

# <ins>Components Overview</ins>

### 1. App

This code represents a React application called "KONOHA BANK," which allows users to manage their transactions. Here's a description of what the code does:

1. `State Management:`
   The code uses the useState hook to manage various states, including transactions, watchedByEffect, showForm, searchInput, theme, and bodyBgc.

2. `Context API:`
   The app uses the createContext function to create a themeContext, which is later used to provide the theme value to child components via the themeContext.Provider.
   Components consuming the themeContext will receive the current theme value to apply appropriate styling.

3. `Data Fetching:`
   The code fetches transaction data from the server using the fetch API inside the useEffect hook with a dependency on watchedByEffect. The fetched data is stored in the transactions state.

4. `Theme Management:`
   The app supports a light/dark theme toggle using the ReactSwitch component from the "react-switch" library.
   When the theme is toggled, the toggleSwitchHandler function is called to change the theme and apply corresponding styles to the body.

5. `Form Handling:`
   The app supports adding new transactions using the TransactionForm component.
   When the button is clicked, the addTransaction function toggles the display of the form.
   Users can input transaction details in the form and submit it. The PostFormObjectToServer function sends a POST request to the server with the form data to add a new transaction.

6. `Transaction Management:`
   The app displays a table of all transactions using the TransactionList component.
   The TransactionList component is responsible for rendering the transactions and provides functionality to filter transactions based on the searchInput state.
   Users can delete transactions by clicking the delete button, which triggers the onDeleteTransaction function.

### 2. TransactioList

The TransactionList component receives transactions, onDeleteTransaction, and searchInput as props. It uses the useState and useEffect hooks for state management. The component displays a table containing transaction details, including id, category, description, amount, date, and an edit button for each transaction.

<ins>Key Functionality:</ins>

1. `Transaction Rendering:` The component maps through the transactions array to display
   each transaction in a table row using the Transaction component.

2. `Filtering:` The transactions can be filtered based on user input in the SearchBar.
   The searchInput prop is used to filter transactions based on matching descriptions or categories.

3. `Sorting:` The component allows sorting transactions by category, description, or amount.
   Clicking on the respective select options triggers the sortByCategory, sortByDescription, or sortByAmount functions, which sort the transactions based on the chosen criteria and update the displayed transactions accordingly.

4. `Deletion:` Users can delete a transaction by clicking on the delete button, which triggers
   the onDeleteTransaction function.

5. `Theme Context:`
   The component consumes the theme value from the themeContext created in the App component, enabling it to apply appropriate styles based on the current theme.

### 3. Transaction.js

`Transaction component` encapsulates the visual representation and interactivity for a single transaction in the table, allowing users to `delete` or `edit` individual transactions with ease. This component is often used within the `TransactionList component` to display multiple transactions in the table view.

### 4. TransactionForm

Description:
The TransactionForm component receives a callback function, PostFormObjectToServer, from its parent component, which is responsible for posting the new transaction data to the server.

When rendered, the component displays an HTML form with input fields for category, description, amount, and date. Users can enter the relevant details for a new transaction into these input fields.

<ins>Key Functionality:</ins>

1. `State Management:` The component utilizes the useState hook to manage a state object named
   FormObject, which holds the values entered by the user into the input fields.

2. `Input Change Handler:` As users type or change values in the input fields, the
   FornObjectCreator function is triggered, updating the FormObject state with the new values. This is achieved by using the spread operator to create a new state object with the updated values for the specific field.
3. `Form Submission:` When the form is submitted, the formSubmit function is called. It prevents
   the default form submission behavior and invokes the PostFormObjectToServer callback, passing the FormObject state containing the new transaction data. After the submission, the input fields are reset to empty values using setFormObject.

### 5. SearchBar

Overall, the SearchBar component provides an input field where users can type their search queries, and it allows the parent component to manage and use the search query to filter and display relevant transactions based on user input.

# Contact

For any further questions or inquiries, please contact abdiwadud.mohamedd.@gmail.com.

# License

This code is developed by `Abdiwadud Mohamed` and is released under the `Bisinle` License.
