import React from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'

const InputStyled = styled.div`
  width: 300px;
  height: 50px;
  position: relative;
  margin-bottom: 15px;
  font-weight: 600;
  background-color: rgba(0 0 0 1);
  overflow: hidden;
  & input {
    width: 100%;
    height: 100%;
    padding: 20px 0 0 3px;
    border: none;
    outline: none;
    font-size: 16px;
    color: #4141 41;
    background-color: inherit;
    filter: none;
  }
  & input:focus + label span,
  input:not(:placeholder-shown) + label span {
    transform: translateY(-150%);
    color: #2c7a8c;
    font-size: 14px;
  }
  & input:focus + label::after,
  input:not(:placeholder-shown) + label::after {
    transform: translateX(0%);
  }
  & label {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    border-bottom: 1.5px solid #a3a7b2;
    pointer-events: none;

    & span {
      position: absolute;
      left: 3px;
      bottom: 3px;
      color: #404246;
      transition: all 0.3s ease;
    }
  }
  & label::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    border-bottom: 4px solid #2c7a8c;
    transform: translateX(-100%);
    transition: all 0.3s ease;
  }
`

const CustomInput = ({ type, text, reg, name }) => {
  const {
    formState: { errors },
  } = useForm()
  return (
    <InputStyled>
      <input
        type={type}
        {...reg}
        placeholder=' '
        // autocomplete="off"
      ></input>
      <label>
        <span>{text}</span>
      </label>
      {errors[name] && <p>To pole nie może być puste</p>}
    </InputStyled>
  )
}

export default CustomInput
