import React, { useState } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/lib/styles.scss';
// import 'react-credit-cards/es/styles-compiled.css';

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
        const { name, value } = e.target;
        setCardData({ [name]: value });
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
            <form>
                <input
                    type="tel"
                    name="number"
                    placeholder="Card Number"
                    onChange={(e) => handleInputChange(e)}
                    // onFocus={(e) => handleInputFocus(e)}
                />
            </form>
        </div>
    );
};

export default CreditCard;
