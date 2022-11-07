import React from "react";

import css from './currency.module.css'

const CurrencyInput = ({amount, onAmountChange, currency, onCurrencyChange, currencies}) => {
    return (
        <div className={css.group}>
            <input type="text" value={amount} onChange={ev => onAmountChange(ev.target.value)} />
            <select value={currency} onChange={ev => onCurrencyChange(ev.target.value)}>
                {currencies.map((currency => (
                    <option key={currency} value={currency}>{currency}</option>
                )))}
            </select>
        </div>
    );
};

export {CurrencyInput};
