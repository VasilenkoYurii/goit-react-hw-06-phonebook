import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const MainForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 4px solid #3c9086;
  padding: 10px;
  border-radius: 10px;
`;

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
`;

export const Input = styled(Field)`
  margin-left: 40px;
  font-size: 14px;
`;

export const Button = styled.button`
  &:hover {
    background-color: teal;
  }
`;
