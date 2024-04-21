import React from "react";
import TicketsContainer from "./StyledComponents";
import Card from "../components/UI/Card";
import useTicketsList from "./useTicketsList";
import {Currency, Ticket, Transfer} from "./types";
import CurrencyItem from "./components/CurrencyItem";
import TransferItem from "./components/TransferItem";
import { LinearProgress } from '@mui/material'
const transfers: Transfer[] = ['none', 'all', 'one', 'two', 'three'];
const currencies: Currency[] = ['usd', 'rub', 'eur'];

// Компонент главной страницы
const TicketList = () => {
    const [store, actions, isLoading] = useTicketsList();

    const {handleChangeCurrency, handleChangeTransfers,handleToggleOneItem} = actions;

    const filterItemMethod = (tickets: Ticket[]) => {
        // @ts-ignore
        return tickets.sort((a,b)=>(a.price-b.price))
            .filter(a => a.currency === store.currency)
            .filter(a => {
                if (store.transfers.length === 0) {
                    return true
                }

                return store.transfers.includes(a.transfer);
            })
    }

    const tickets = filterItemMethod(store.tickets);

    return (
        <TicketsContainer>
            <form className="filter">
                <div className="filter__currency">
                    <div className="filter__currency-title">Валюта</div>
                    <div className="form-group">
                        <div className="input-group" role="group">
                            {currencies.map((c, i) => (
                                <CurrencyItem
                                    key={i}
                                    currency={c}
                                    currentCurrency={store.currency}
                                    handleChange={handleChangeCurrency}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="filter__transfer">
                    <div className="filter__transfer-title">Количество пересадок</div>
                    <div className="filter__checkboxes">
                        {transfers.map((t, i) => (
                            <TransferItem
                                key={i}
                                checked={t === 'all' ? store.transfers.length === 0 : store.transfers.includes(t)}
                                handleChange={handleChangeTransfers}
                                handleToggleOneItem={handleToggleOneItem}
                                transfer={t}
                            />
                        ))}
                    </div>
                </div>
            </form>
            {isLoading&&<LinearProgress className={'progress'}/>}
            <div className="tickets">
                {tickets.map((t, i) => <Card key={i} ticket={t} />)}
            </div>
        </TicketsContainer>
    )
}

export default TicketList
