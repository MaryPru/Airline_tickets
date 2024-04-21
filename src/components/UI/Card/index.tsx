import React from "react";
import CardItem from "./StyledComponents";
import {AirplanemodeActive} from "@mui/icons-material";
import {CurrencyText, Ticket, TransferText} from "../../../pages/types";
import CurrencyItem from "../../../pages/components/CurrencyItem";

interface Props {
    ticket: Ticket
}

const Card = (props: Props) => {
    const {
        timeTakeoff,
        townTakeoff,
        dateTakeoff,
        timeLanding,
        townLanding,
        dateLanding,
        countOfTransfer,
        price,
        currency
    } = props.ticket

    return (
        <CardItem>
            <div className="left-block">
                <img src='/logo.png' alt="logo"/>
                <div className="action">
                    <button type="submit">Купить за <span>{price} {CurrencyText[currency]}</span></button>
                </div>
            </div>
            <div className="right-block">
                <div className="block-takeoff">
                    <div className="time">{timeTakeoff}</div>
                    <div className="town">{townTakeoff}</div>
                    <div className="date">{dateTakeoff}</div>
                </div>
                <div className="block"><span>{countOfTransfer} </span>   {countOfTransfer === 0 ? ' пересадок' : countOfTransfer === 1 ? ' пересадка' : ' пересадки'} <span
                    className={'icon'}><AirplanemodeActive/></span></div>
                <div className="block-landing">
                    <div className="time">{timeLanding}</div>
                    <div className="town">{townLanding}</div>
                    <div className="date">{dateLanding}</div>
                </div>
            </div>
        </CardItem>
    )
}

export default Card
