import {styled} from '@mui/material';

const TicketsContainer = styled('div')`
  display: flex;
  align-items: start;
  gap: 50px;
  justify-content: center;
  margin: 0 auto;
  max-width: 80%;

  .progress {
    position: fixed;
    width: 100%;
    z-index: 100;

    & + .tickets {
      background: rgba(255, 255, 255, 0.24);
      filter: blur(2px);

    }
  }
}

.tickets {
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 610px;
}

.filter {
  min-width: 246px;

  &__currency-title {
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  &__transfer-title {
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  &__transfer {
    margin-top: 20px;
  }

  &__checkboxes {
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-size: 18px;

    .form-group {
      color: rgba(128, 128, 128, 0.85);
      padding: 10px;
      background: transparent;
      display: flex;
      align-items: center;
      gap: 5px;
      cursor: pointer;
      span{
        margin-left: auto;
        color: transparent;
        transition: 400ms;
        padding: 5px;
        z-index: 5;
      }
      label {
        pointer-events: none;
      }

      &:hover {
        background: rgba(71, 139, 241, 0.13);
        span{
          color: #478bf1;
          box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        }
      }
    }

    input[type="checkbox"] {
      appearance: none;
      background-color: #fff;
      margin: 0;
      font: inherit;
      color: #478bf1;
      width: 30px;
      height: 30px;
      border: 1px solid #478bf1;
      border-radius: 0.15em;
      transform: translateY(-0.075em);
      display: grid;
      place-content: center;
      cursor: pointer;
    }

    input[type="checkbox"]::before {
      content: "\\2713";
      width: 20px;
      height: 40px;
      font-size: 28px;
      opacity: 0;
      transition: 120ms opacity ease-in-out;
    }

    input[type="checkbox"]:checked::before {
      opacity: 1;
    }
  }


  @media screen and (max-width: 1140px) {

  }
  @media screen and (max-width: 768px) {

  }

  .input-group {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .input-group-radio {
    position: relative;
    white-space: nowrap;
    vertical-align: middle;
    display: flex;
    width: 100%;
  }


  .radio-btn label {
    width: 100%;
    border-radius: 5px;
    border: 1px solid #D1D3D4;
    font-weight: normal;
    cursor: pointer;
    display: inline-block;
    line-height: 1.42857;
    margin-bottom: 0;
    padding: 6px 12px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-transform: uppercase;
    transition: 400ms;
    color: #478bf1;
  }

  .radio-btn:hover label {
    background-color: rgba(71, 139, 241, 0.27);
    border-color: #478bf1;
    color: #478bf1;
  }


  .input-group-radio input[type="radio"]:empty {
    display: none;
  }

  .input-group-radio input[type="radio"]:checked ~ label {
    border-color: rgb(173, 173, 173);
    background-image: none;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.125) inset;
    outline: 0 none;
  }

  .input-group > .input-group-radio:first-of-type:not(:last-child) label {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  }

  .input-group > .input-group-radio:last-child:not(:first-of-type) label {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
  }

  .input-group > .input-group-radio:not(:first-of-type):not(:last-child) label {
    border-radius: 0;
  }

  .input-group-radio .radio-btn-default input[type="radio"]:checked ~ label {
    background-color: rgb(230, 230, 230);
    color: rgb(51, 51, 51);
  }

  .input-group-radio .radio-btn-primary input[type="radio"]:checked ~ label {
    color: #fff;
    background-color: #478bf1;
  }
`;
export default TicketsContainer



