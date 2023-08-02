import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const InputTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '4px',
    backgroundColor: 'var(--grey-2)',
    border: '1px solid rgba(0,0,0,.1)',
    fontFamily: 'CustomFont2_light, sans-serif',
    transitino: "all .4s",

    '& fieldset': {
      borderColor: 'transparent',
    },
    '&:hover fieldset': {
      borderColor: 'transparent',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'transparent',
    },
    '&.Mui-focused ': {
      border: '2px solid var(--blue-1)',
    },
  },
  '& .MuiOutlinedInput-input': {
    padding: '20px 10px',
    fontSize: '14px',
    fontWeight: '400',
    fontFamily: 'CustomFont2_light, sans-serif',
    color: "var(--dark-1)"

  },
  '& .MuiInputLabel-root': {
    fontSize: '15px',
    fontWeight: '400',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    // Styles when the form is focused
    color: 'var(--blue-1)',
    fontWeight: '400',
  },
  '& .MuiInputLabel-shrink': {
    transform: 'translate(12px, 6px) scale(0.75)',
    color: 'var(--blue-1)', fontWeight: "normal"
  },
}));

type EditInput = {
  types?: String
}

// Define the prop type for the setState function
type SetStateProp<T> = React.Dispatch<React.SetStateAction<T>>

type EditInputTypes = {
  state?: string;
  label?: string;
  setState?: SetStateProp<Object>;
  // bio?: string;
  // setBio?: SetStateProp<string>;
  // location?: string;
  // setLocation?: SetStateProp<string>;
  // website?: string;



  // setWebsite?: SetStateProp<string>;
};

type FormInputProps = EditInput & EditInputTypes;


const FormInput: React.FC<FormInputProps> = ({ types, setState, state, label }) => {
  const handleFormInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (setState) {
      setState(e.target.value);
    }
  }

  return (
    <InputTextField
      label={label}
      variant="outlined"
      fullWidth
      value={state}
      onChange={handleFormInput}
      multiline={types === 'textarea'}
    />
  );
};

export default FormInput;
