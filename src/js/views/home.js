import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext"; // Importa el contexto
import ContactCard from "../component/ContactCard.jsx";

const Home = () => {
    const { store, actions } = useContext(Context); // Accede al store y las acciones

    // Carga los contactos al iniciar
    useEffect(() => {
        actions.loadContacts();
    }, []);

    return (
        <div className="text-center mt-5">
            <h1>Lista de Contactos</h1>
            {store.contacts.map((contact) => (
                <ContactCard key={contact.id} contact={contact} />
            ))}
        </div>
    );
};

export default Home;
