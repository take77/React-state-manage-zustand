import React from 'react';
import './App.css';

import { css } from '@emotion/react';
import Typography from '@mui/material/Typography';

import EmailField from '../src/components/EmailField';
import PasswordField from '../src/components/PasswordField';
import SubmitButton from '../src/components/SubmitButton';

import { useFieldsStore } from './stores/fieldsStore';

const contentsBox = css({
  margin: '3rem auto',
  width: '90%',
  maxWidth: '720px',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem'
});

function App() {
  const {
    email,
    password
  } = useFieldsStore();
  return (
    <div css={contentsBox}>
      <Typography>メールアドレス：{email}</Typography>
      <Typography>パスワード：{password}</Typography>
      <EmailField />
      <PasswordField />
      <SubmitButton />
    </div>
  );
}

export default App;
