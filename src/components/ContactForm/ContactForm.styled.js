import styled from 'styled-components';
import { Field, Form, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;
  align-items: center;
`;

export const StyledField = styled(Field)`
  padding: 4px 4px 4px 8px;
  width: 300px;
  border-radius: 4px;
  outline: none;
  border: 1px solid green;
  color:green;
  background-color: #ffffff;
  box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.5);
`;

export const StyledError = styled(ErrorMessage)`
  color: red;
  font-size: 12px;
  font-style: italic;
`;

export const StyledLable = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Button = styled.button`
box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.5);
width: 300px;
color: white;
border-radius: 8px;
background-color: green;
`;