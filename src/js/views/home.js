import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext"; // Importa el contexto
import ContactCard from "../component/ContactCard.jsx";
import EditContactModal from "../component/EditContactModal.jsx";

const Home = () => {
    const { store, actions } = useContext(Context); // Accede al store y las acciones
    const [showCreateModal, setShowCreateModal] = useState(false); // Estado para el modal de creación

    // Carga los contactos al iniciar
    useEffect(() => {
        actions.loadContacts();
    }, []);

    // Función para guardar un nuevo contacto
    const handleSaveNewContact = (newContact) => {
        actions.addContact(newContact); // Llama a la acción de agregar contacto
        setShowCreateModal(false); // Cierra el modal
    };

    return (
        <div className="text-center mt-5">
            <h1>Lista de Contactos</h1>
            <button
                className="btn btn-success mb-3"
                onClick={() => setShowCreateModal(true)}
            >
                Añadir Contacto
            </button>
            {store.contacts.map((contact) => (
                <ContactCard key={contact.id} contact={contact} />
            ))}

            {/* Modal para crear un nuevo contacto */}
            <EditContactModal
                show={showCreateModal}
                onClose={() => setShowCreateModal(false)}
                onSave={handleSaveNewContact}
                isNew={true} // Indica que es un nuevo contacto
            />
        </div>
    );
};

export default Home;
