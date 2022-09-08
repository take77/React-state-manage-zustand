import React from 'react';

import TextField from '@mui/material/TextField';
import { useFieldsStore } from '../stores/fieldsStore';

const EmailField: React.FC = () => {
  // 本当は再利用性上げるために、propsで渡した方がいいとは思います。
  const {
    email,
    setEmail,
    emailIsError,
    setEmailIsError,
  } = useFieldsStore();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setEmailIsError();
  }

  return (
    <TextField
      type="email"
      label="メールアドレス"
      placeholder='test@mail.com'
      value={email}
      error={emailIsError}
      helperText={emailIsError && "メールアドレスの形式が正しくありません"}
      onChange={handleChange}
      variant="outlined"
      fullWidth
    />
  )
}

export default EmailField;
