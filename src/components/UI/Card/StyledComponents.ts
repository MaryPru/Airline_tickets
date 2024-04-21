import {styled} from '@mui/material';

const CardItem = styled('div')`
  padding: 20px;
  border: 1px solid #80808059;
  transition: 400ms;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  border-radius: 10px;
  overflow: hidden;

  &:hover {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }

  .left-block {
    padding-right: 20px;
    border-right: 1px solid #80808059;

    img {
      max-width: 150px;
    }
  }

  .right-block {
    padding-left: 20px;
    display: flex;
    align-items: start;
    justify-content: space-between;

    .time {
      font-size: 30px;
    }

    .date {
      color:#80808059;
    }

    .block {
      display: flex;
      align-items: center;
      position: relative;
      width: 100px;
      gap: 5px;
      color:#80808059;
      padding: 0 20px;

      .icon {
        position: absolute;
        width: 90px;
        bottom: -10px;

        svg {
          fill: #80808059;
          transform: rotate(90deg);
          right: -16px;
          bottom: -11px;
          position: absolute;
        }

        &:before {
          content: '';
          width: 100px;
          height: 2px;
          background: #80808059;
          right: 0;
          bottom: 0;
          position: absolute;
        }
      }
    }
  }

  button {
    background: #ff7300;
    padding: 10px 20px;
    font-size: 20px;
    color: white;
    margin-top: 10px;
    outline: none;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 150px;
    cursor: pointer;
    transition: 400ms;
    border: 1px solid transparent;

    &:hover {
      background: rgba(255, 115, 0, 0.87);
      border: 1px solid white;
    }
  }

  @media screen and (max-width: 1140px) {

  }
  @media screen and (max-width: 768px) {

  }
`;
export default CardItem
