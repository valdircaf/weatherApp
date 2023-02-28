import styled from 'styled-components'

export const Container = styled.section`



  div{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 35em auto;
    background-color: rgba(255, 255, 255, 0.7);
    width: 30%;
    border-radius: 5px;
    gap: 2em;

    h1{
      font-size: 2em;
      color: #E83845;
    }

    h2{
      font-size: 3em;
      display: flex;
      align-items: center;
    }

    h3{
      font-size: 1em;
      color: #095E60;
      text-transform: capitalize;
    }
  }
`
