import React, { useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import ContactCard from "../component/ContactCard.jsx";

export const Home = () => {
    // Estado para almacenar la lista de contactos
    const [contacts, setContacts] = useState([
        {
            id: 1,
            name: "Yuki Hayashi",
            email: "yuki@Maxwell.com",
            phone: "123-456-7890",
            address: "123 Main St, New York, NY 10001",
            avatar: "https://bootdey.com/img/Content/avatar/avatar7.png",
        },
    ]);

    // Función para actualizar un contacto
    const handleUpdateContact = (updatedContact) => {
        setContacts((prevContacts) =>
            prevContacts.map((contact) =>
                contact.id === updatedContact.id ? updatedContact : contact
            )
        );
    };

    // Función para eliminar un contacto
    const handleDeleteContact = (contactId) => {
        setContacts((prevContacts) =>
            prevContacts.filter((contact) => contact.id !== contactId)
        );
    };

    return (
        <div className="text-center mt-5">
            <h1>Lista de Contactos</h1>
            {contacts.map((contact) => (
                <ContactCard
                    key={contact.id}
                    contact={contact}
                    onUpdate={handleUpdateContact}
                    onDelete={handleDeleteContact}
                />
            ))}
        </div>
    );
};
