const contacts = [
  {
    id: 1,
    name: "Arman Abkar",
    address: "Isfahan, Hakim Nezami Street",
    phone: "989363868196",
    email: "armanabkar@gmail.com",
  },
  {
    id: 4,
    name: "John Doe",
    address: "42nd Street, Unknown",
    phone: "1111111111",
    email: "john@doe.com",
  },
  {
    id: 5,
    name: "Sogol Abkar",
    address: "Isfahan, Hakim Nezami Street",
    phone: "3333333333",
    email: "sogolabkar@gmail.com",
  },
  {
    id: 2,
    name: "Foo Bar",
    address: "Neverland, Nevercity, Nevercountry",
    phone: "2222222222",
    email: "foo@bar.com",
  },
  {
    id: 3,
    name: "Lorem Ipsum",
    address: "Dummy street",
    phone: "3333333333",
    email: "lorem@ipsum.com",
  },
  {
    id: 6,
    name: "Alin Abkar",
    address: "Isfahan, Hakim Nezami Street",
    phone: "3333333333",
    email: "alinabkar@gmail.com",
  },
];

export const getContacts = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        contacts.map((contact) => ({ id: contact.id, name: contact.name }))
      );
    }, 2000);
  });

export const getDetails = (id) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(contacts.filter((contact) => contact.id === id)[0]);
    }, 2000);
  });
