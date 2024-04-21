import {useEffect, useState} from "react";
import {Currency, Ticket, Transfer} from "./types";

type TicketsState = {
    tickets: Ticket[];
    currency: Currency;
    transfers: Transfer[];
};

const initialState: TicketsState = {
    tickets: [],
    currency: 'usd',
    transfers: [],
};

const fetchData = async () => {
    try {
        const response = await fetch('../tickets.json');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);

        return [];
    }
};

interface UseTicketsListActions {
    handleChangeTransfers(transfer: Transfer): void
    handleToggleOneItem(transfer: Transfer): void
    handleChangeCurrency(currency: Currency): void
}

// Компонент главной страницы
const useTicketsList = (): [TicketsState, UseTicketsListActions, boolean] => {

    const [store,setStore] = useState<TicketsState>(initialState);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const handleChangeTransfers = (transfer: Transfer) => {
        const hasTransfer = store.transfers.includes(transfer);
        if (hasTransfer) {
            const transfers = store.transfers.filter((t) => t !== transfer);

            setStore((prev) => ({
                ...prev,
                transfers
            }))

            return
        }

        if(transfer==='all'){
            const transfers: Transfer[] = [];
            setStore((prev) => ({
                ...prev,
                transfers
            }))

            return
        }

        setStore((prev) => ({
            ...prev,
            transfers: [...prev.transfers, transfer]
        }))

    }

    const handleToggleOneItem = (transfer: Transfer) => {
        setStore((prev) => ({
            ...prev,
            transfers: [transfer]
        }))

    }

    const handleChangeCurrency = (currency: Currency) => {
        setStore((prev) => ({
            ...prev,
            currency
        }))
    }

    const handleSaveTickets = (tickets: Ticket[]) => {
        setIsLoading(true);
        setStore((prev) => ({
            ...prev,
            tickets
        }))
       setTimeout(()=>{
           setIsLoading(false);
       },2000)
    }

    useEffect(() => {
        fetchData().then(handleSaveTickets)
    },[])

    const actions:UseTicketsListActions = {
        handleChangeCurrency,
        handleToggleOneItem,
        handleChangeTransfers,
    }

    return [store, actions, isLoading]
}

export default useTicketsList
