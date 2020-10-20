import { combineReducers } from "redux";

const items = (state = [], action) => {
  switch (action.type) {
    case "contact/add":
      return [...state, action.payload.contact];
    case "contact/remove":
      return state.filter((contact) => contact.id !== action.payload.id);

    default:
      return state;
  }
};
const filter = (state = "", action) => {
  switch (action.type) {
    case "contact/filter":
      return action.payload.filter;
    default:
      return state;
  }
};

export default combineReducers({ items, filter });

// onChangeFilter = (filter) => {
//     this.setState({ filter });
//   };
//   addContact = ({ name, number }) => {
//     const contact = {
//       id: uuidv4(),
//       name,
//       number,
//     };
//     this.setState((prevState) => {
//       return { contacts: [...prevState.contacts, contact] };
//     });
//   };
//   removeContact = (contactId) => {
//     this.setState((prevState) => {
//       return {
//         contacts: prevState.contacts.filter(
//           (contact) => contact.id !== contactId
//         ),
//       };
//     });
//   };
