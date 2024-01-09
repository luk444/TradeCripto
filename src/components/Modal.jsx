import React, { useState, useEffect } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import './Styles.css'; // Importa tu archivo CSS

const Modal = ({ onClose, cardTitle }) => {
  const [loading, setLoading] = useState(true);
  const [walletInfo, setWalletInfo] = useState(null);
  const [loadingText, setLoadingText] = useState('Generando Wallet de depósito para BTC');
  const [aliasCvu, setAliasCvu] = useState(''); // Nuevo estado para almacenar el alias o CVU

  useEffect(() => {
    // Simulamos una carga de datos
    const timeout = setTimeout(() => {
      setLoading(false);
      // Obtener la información de la billetera según la tarjeta seleccionada
      setWalletInfo(getWalletInfoByCard(cardTitle));
      // Cambiar el texto después de cargar
      setLoadingText(' ');
    }, 2000);

    return () => clearTimeout(timeout);
  }, [cardTitle]);

  const getWalletInfoByCard = (cardTitle) => {
    // Lógica para obtener la información de la billetera según la tarjeta
    // Aquí deberías implementar la lógica real para cada tarjeta
    // Puedes devolver un objeto con la información de la billetera
    // Ejemplo:
    if (cardTitle === 'BTC') {
      return { currency: 'BTC', walletAddress: '0x113a8428b051a6f277329998dc22fec819836aba' };
    } else if (cardTitle === 'WLD') {
      return { currency: 'WLD', walletAddress: '0x113a8428b051a6f277329998dc22fec819836aba' };
    } else if (cardTitle === 'USDT') {
      return { currency: 'USDT', walletAddress:'0x113a8428b051a6f277329998dc22fec819836aba' };
    }

    return null;
  };

  const handleAliasCvuChange = (e) => {
    setAliasCvu(e.target.value);
  };

  const modalStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '1000',
    fontFamily: 'Arial, sans-serif', // Cambia 'Arial, sans-serif' por tu fuente preferida
    fontWeight: 'bold', // Puedes cambiar 'bold' por 'normal' u otros valores numéricos como 400, 700, etc.
    color: '#fa8072'
  };

  const bodyStyle = {
    overflow: loading ? 'hidden' : 'auto',
  };

  return (
    <div className='Wa'>
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50" style={bodyStyle}></div>
      <div className="fixed inset-0 flex items-center justify-center" style={bodyStyle}>
        <div className="bg-white p-4 rounded-md" style={modalStyle}>
          {/* Contenido de la modal */}
          <p className="modal-text">{loadingText}</p>
          {loading && (
            <div className="flex items-center justify-center mt-4">
              <ThreeDots color="#000" height={80} width={80} />
            </div>
          )}
          {!loading && (
            <>
              <p className='Ma'>Wallet Address:</p>
              <br />
              <p className="wallet-address ma">{walletInfo?.walletAddress}</p>
              
              {/* Nuevo campo de entrada (input) para alias o CVU */}
              <div className="mt-4">
                <label htmlFor="aliasCvu" className="block text-sm font-medium text-gray-700">
                  Ingrese Alias/CBU/CVU:
                </label>
                <input
                  id="aliasCvu"
                  type="text"
                  value={aliasCvu}
                  onChange={handleAliasCvuChange}
                  className="border-2 rounded-md px-2 mt-1"
                />
              </div>
              
              <button className="bg-[#fa8072] text-white px-2 py-1 rounded-md mt-2" onClick={onClose}>
                Aceptar
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
