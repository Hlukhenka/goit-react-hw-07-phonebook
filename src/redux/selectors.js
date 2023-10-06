export const selectContacts = state => state.contacts.contacts;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilterValue = state => state.filterValue;

export const selectFilteredContacts = state => {
  const contacts = selectContacts(state);
  const filterValue = selectFilterValue(state);

  const filteredItems = contacts.filter(contact => {
    return (
      contact.text.name.toLowerCase().includes(filterValue.toLowerCase()) ||
      contact.text.number.includes(filterValue)
    );
  });
  return filterValue ? filteredItems : contacts;
};
