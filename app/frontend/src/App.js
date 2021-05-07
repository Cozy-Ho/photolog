import React, { useState } from "react";
import "./App.css";
import Mapbox from "./components/Map.js";
import Modal from "./components/Modals/Modal.js";

function App() {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };
    return (
        <div className="App">
            <div>
                <button onClick={openModal}> == </button>
                <Modal open={modalOpen} close={closeModal} header="Modal heading">
                    test message!
                </Modal>
            </div>
            <div>
                <Mapbox></Mapbox>
            </div>
        </div>
    );
}

export default App;
