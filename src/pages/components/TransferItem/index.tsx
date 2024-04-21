import React from "react";
import {Currency, Transfer, TransferText} from "../../types";

interface Props {
    transfer: Transfer;
    checked:boolean;
    handleChange(c:Transfer): void;
    handleToggleOneItem(c:Transfer): void;
}


const TransferItem = (props: Props) => {
    const {transfer,checked,handleChange,handleToggleOneItem} = props

    return (
        <div className="form-group"  onClick={() => handleChange(transfer)}>
            <input
                checked={checked}
                type="checkbox"
                id={"transfer-" + transfer}
                onChange={() => {}}
            />
            <label htmlFor={"transfer-" + transfer}>
                {TransferText[transfer]}
            </label>
            <span  onClick={(e) =>{e.stopPropagation(); handleToggleOneItem(transfer)} }>только</span>
        </div>
    )
}

export default TransferItem
