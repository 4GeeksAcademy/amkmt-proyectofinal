import React, { useState } from 'react';
import "../../styles/pago.css";

const PaymentForm = () => {
    const [paymentData, setPaymentData] = useState({
        cardNumber: '',
        cardHolder: '',
        expirationDate: '',
        cvv: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPaymentData({ ...paymentData, [name]: value });
    };

    const handlePaymentSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para enviar los datos de pago al backend
        // Por ahora, solo mostraremos los datos en la consola como ejemplo
        console.log(paymentData);
    };

    return (
        <div className='container formulariocaja'>
            <h2 className='titulodeform'>Formulario de Pago</h2>
            <form onSubmit={handlePaymentSubmit}>
                <div className="form-group">
                    <label>Número de tarjeta</label>
                    <input className='inputforms'
                        type="text"
                        name="cardNumber"
                        value={paymentData.cardNumber}
                        onChange={handleInputChange}
                        placeholder="Número de tarjeta"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Titular de la tarjeta</label>
                    <input className='inputforms'
                        type="text"
                        name="cardHolder"
                        value={paymentData.cardHolder}
                        onChange={handleInputChange}
                        placeholder="Titular de la tarjeta"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Fecha de expiración</label>
                    <input className='inputforms'
                        type="text"
                        name="expirationDate"
                        value={paymentData.expirationDate}
                        onChange={handleInputChange}
                        placeholder="MM/YY"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>CVV</label>
                    <input className='inputforms'
                        type="text"
                        name="cvv"
                        value={paymentData.cvv}
                        onChange={handleInputChange}
                        placeholder="CVV"
                        required
                    />
                </div>
                <button id='botondepagar' className='w-25' type="submit"><i class="fa-solid fa-arrow-right fa-2x"></i></button>
            </form>
        </div>
    );
};

export default PaymentForm;
