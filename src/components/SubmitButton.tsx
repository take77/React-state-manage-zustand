import React from 'react';

import Button from '@mui/material/Button';

import { useFieldsStore } from '../stores/fieldsStore';


const SubmitButton: React.FC = () => {
  const { clickable } = useFieldsStore();

  return (
    <Button
      disabled={!clickable()}
      size="large"
      variant="contained"
      fullWidth
    >
      困ったらオチに使えるよ
    </Button>
  );
};

export default SubmitButton;
