type TicketId = string;

export type Ticket = {
    id: TicketId;
    timeTakeoff: string,
    townTakeoff: string,
    dateTakeoff: string,
    timeLanding: string,
    townLanding: string,
    dateLanding: string,
    countOfTransfer: number,
    price: number
    currency: Currency
    transfer: Transfer
};

export type Currency = 'usd' | 'rub' | 'eur';
export type Transfer = 'none' | 'all' | 'one' | 'two' | 'three';

export enum TransferText {
    'none' = 'Без пересадок',
    'all' = 'Все',
    'one' = '1 пересадка',
    'two' = '2 пересадки',
    'three' = '3 пересадки',
}

export enum CurrencyText {
    'usd' = '$',
    'eur' = '€',
    'rub' = '₽',
}
