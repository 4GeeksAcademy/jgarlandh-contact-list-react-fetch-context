const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            contacts: [], // Almacena la lista de contactos
        },
        actions: {
            // Cargar contactos desde la API
            loadContacts: async () => {
                try {
                    const response = await fetch("https://playground.4geeks.com/contact/agendas/Jesus/contacts");
                    console.log(response.status, response.statusText);
                    if (response.status === 404) {
                        await getActions().createUser();
                        return;
                    }
                    const data = await response.json();
                    console.log(data.contacts);
                    setStore({ contacts: data.contacts }); // Actualiza el store con los contactos
                } catch (error) {
                    console.error("Error loading contacts:", error);
                }
            },

            // Crear un usuario si no existe
            createUser: async () => {
                try {
                    const response = await fetch("https://playground.4geeks.com/contact/agendas/Jesus", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                    });
                    console.log(response.status, response.statusText);
                    if (response.status === 201) {
                        await getActions().loadContacts(); // Vuelve a cargar los contactos después de crear el usuario
                    }
                } catch (error) {
                    console.error("Error creating user:", error);
                }
            },

            // Agregar un nuevo contacto
            addContact: async (contact) => {
                try {
                    const response = await fetch("https://playground.4geeks.com/contact/agendas/Jesus/contacts", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(contact),
                    });
                    console.log(response.status, response.statusText);
                    if (response.status === 201) {
                        await getActions().loadContacts(); // Vuelve a cargar los contactos después de agregar uno nuevo
                    }
                } catch (error) {
                    console.error("Error adding contact:", error);
                }
            },

            // Actualizar un contacto existente
            updateContact: async (updatedContact) => {
                try {
                    const response = await fetch(`https://playground.4geeks.com/contact/agendas/Jesus/contacts/${updatedContact.id}`, {
                        method: "PUT",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(updatedContact),
                    });
                    console.log(response.status, response.statusText);
                    if (response.status === 200) {
                        await getActions().loadContacts(); // Vuelve a cargar los contactos después de actualizar
                    }
                } catch (error) {
                    console.error("Error updating contact:", error);
                }
            },

            // Eliminar un contacto
            deleteContact: async (contactId) => {
                try {
                    const response = await fetch(`https://playground.4geeks.com/contact/agendas/Jesus/contacts/${contactId}`, {
                        method: "DELETE",
                        headers: { "Content-Type": "application/json" },
                    });
                    console.log(response.status, response.statusText);
                    if (response.status === 204) {
                        await getActions().loadContacts(); // Vuelve a cargar los contactos después de eliminar
                    }
                } catch (error) {
                    console.error("Error deleting contact:", error);
                }
            },
        },
    };
};

export default getState;
