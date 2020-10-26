import styled from 'styled-components';

export const Heading = styled.h1`
    padding: 1rem;
`;

export const Card = styled.div`
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #313b3f;
    background-clip: border-box;
    border: 2px solid rgba(255, 255, 255, .125);
    border-radius: .25rem;
`;

export const ListGroup = styled.ul`
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    border-radius: .25rem;
`;

export const ListGroupItem = styled.li`
    position: relative;
    display: flex;
    padding: .75rem 1.25rem;
    background-color: $bgColor;
    border: 1px solid rgba(255, 255, 255, .125);
    justify-content: space-between;
    
    &:first-child {
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
    }
    
    &:last-child {
        border-bottom-right-radius: inherit;
        border-bottom-left-radius: inherit;
    }
    
    & + & {
        border-top-width: 0;
    }
`;

export const ListLink = styled.a`
    color: hsla(0, 0%, 100%, .85);
    text-decoration: none;
    cursor: pointer;
`;

export const FormGroup = styled.div`
    display: block;
    padding: 1rem;
    margin-top: 20px;
    label {
        display: block;
        margin-bottom: 20px;
    }
    textarea {
        margin: 0 auto;
        width: 100%;
        height: 150px;
        background: hsla(0, 0%, 100%, .85);
    }
    input {
        width: 60%;
        height: 40px;
        margin-left: 20px;
        padding: 0 10px;
        font-size: 18px;
        background: hsla(0, 0%, 100%, .85);
        border-radius: 8px;
    }
`;

export const Button = styled.button`
      display: inline-block;
      font-weight: 400;
      color: hsla(0, 0%, 100%, .85);
      text-align: center;
      vertical-align: middle;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      background-color: transparent;
      border: 1px solid transparent;
      border-color: hsla(0, 0%, 100%, .85);
      padding: .25rem .5rem;
      font-size: .875rem;
      line-height: 1.5;
      border-radius: .2rem;
      transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    
    &:hover {
      color: #212529;
      background-color: #f8f9fa;
      border-color: #f8f9fa;
      text-decoration: none;
    }
    
    &:focus {
      outline: 0;
      box-shadow: 0 0 0 .2rem rgba(248, 249, 250, .5);
    }
    
    &:disabled {
      cursor: not-allowed;
    }
`;

export const Jumbotron = styled.div`
    padding: 2rem 1rem;
    margin-bottom: 2rem;
    background-color: $bgColor;
    border-radius: .3rem;
    border: 1px solid #fff;
    h2 {
        padding: 1rem;
    }
    p {
        padding: .5rem;
        margin-bottom: 20px;
    }
    ul {
        margin-bottom: 20px;
    }
`;

export const Alert = styled.div`
    position: relative;
    padding: .75rem 1.25rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: .25rem
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb
`;
