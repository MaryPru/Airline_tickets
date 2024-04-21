import React from "react";
import {Currency} from "../../types";

interface Props {
    currentCurrency: Currency;
    currency:Currency;
    handleChange(c:Currency): void;
}


const CurrencyItem = (props: Props) => {
    const {currency,currentCurrency,handleChange} = props

    return (
        <div className="input-group-radio">
            <div className="radio-btn radio-btn-primary">
                <input type="radio" checked={props.currency === currentCurrency}
                       onClick={() => handleChange(currency)} name={currency} id={"currency-" + currency}  onChange={() => {}}/>
                <label htmlFor={"currency-" + currency}> {currency}</label>
            </div>
        </div>
    )
}

export default CurrencyItem
