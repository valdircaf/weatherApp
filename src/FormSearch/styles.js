import styled from 'styled-components';

export const Weather = styled.section`

height: 100vh;
background-size: cover;
background-position: center center;

>form{
  text-align: center;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em 0;
  gap: 10px;

  input{
    width: 30em;
    height: 3em;
    outline: none;
    font-size: 1em;
    background-color: rgba(255,255,255, 0.8);
    border: none;
  }

  input::placeholder{
    text-align: center;
    font-size: 1.5em;
  }

  span{
    svg{
      font-size: 2em;
      cursor: pointer;
      color: #000;
      background-color: rgba(255,255,255, 0.8);
      height: 35px;
      width: 35px;
    }
  }
}

`
