import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import RegistrationForm from '../RegistrationForm/RegistrationForm';

const RegisterButton = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <button onClick={openModal} className="register-button">Регистрация</button>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <RegistrationForm />
        </Modal>
      )}
    </>
  );
};

export default RegisterButton;
