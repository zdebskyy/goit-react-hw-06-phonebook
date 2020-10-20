import { v4 as uuidv4 } from "uuid";

const addContact = ({ name, number }) => ({
  type: "contact/add",
  payload: { contact: { id: uuidv4(), name, number } },
});

const removeContact = (id) => {
  return {
    type: "contact/remove",
    payload: { id },
  };
};

const changeFilter = (filter) => {
  return {
    type: "contact/filter",
    payload: { filter },
  };
};

export default {
  addContact,
  removeContact,
  changeFilter,
};
