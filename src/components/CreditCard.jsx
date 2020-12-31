import React, { useState } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
// import 'react-credit-cards/lib/styles.scss';

const CreditCard = () => {
    const [cardData, setCardData] = useState({
        cvc: '',
        expiry: '',
        focus: '',
        name: '',
        number: '',
    });

    // const handleInputFocus = (e) => {
    //     setCardData({ focus: e.target.name });
    // };
    
    const handleInputChange = (e) => {
        // const { name, value } = e.target;
        // setCardData({ [name]: value });

        setCardData({
            ...cardData,
            [e.target.name]: e.target.value
        })
    };
    return (
        <div id="PaymentForm">
            <Cards
                cvc={cardData.cvc}
                expiry={cardData.expiry}
                // focused={cardData.focus}
                name={cardData.name}
                number={cardData.number}
            />
            <form onSubmit={(e) => null}>
                <input
                    type="number"
                    name="cvc"
                    placeholder="CVC"
                    onChange={(e) => handleInputChange(e)}
                    // onFocus={(e) => handleInputFocus(e)}
                />
                <input
                    type="text"
                    name="expiry"
                    placeholder="Expire Date"
                    onChange={(e) => handleInputChange(e)}
                />
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    onChange={(e) => handleInputChange(e)}
                />
                <input
                    type="number"
                    name="number"
                    placeholder="Card Number"
                    onChange={(e) => handleInputChange(e)}
                />
                <button type="submit">Pay</button>
            </form>
        </div>
    );
};

export default CreditCard;
