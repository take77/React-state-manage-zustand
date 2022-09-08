import create from 'zustand';

type FieldsStoreType = {
  email: string;
  password: string;
  emailIsError: boolean;
  passwordIsError: boolean;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  setEmailIsError: () => void;
  setPasswordIsError: () => void;
  clickable: () => boolean;
}

export const useFieldsStore = create<FieldsStoreType>((set, get) => ({
  email: '',
  password: '',
  emailIsError: false,
  passwordIsError: false,
  setEmail: (value) => {
    set(() => ({email: value}))
  },
  setPassword: (value) => {
    set(() => ({password: value}))
  },
  setEmailIsError: () => {
    const email = get().email;
    const validEmailRegex = new RegExp(/[\w+\-.]+@[a-z\d\-.]+\.[a-z]+/i);

    if (validEmailRegex.test(email)) {
      set(() => ({emailIsError: false}))
    } else {
      set(() => ({emailIsError: true}))
    }
  },
  setPasswordIsError: () => {
    const password = get().password;
    const validPasswordRegex = new RegExp(/^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,}$/i
    );
    if (validPasswordRegex.test(password)) {
      set(() => ({passwordIsError: false}))
    } else {
      set(() => ({passwordIsError: true}))
    }
  },
  clickable: () => {
    const email = get().email;
    const password = get().password;
    const emailIsError = get().emailIsError;
    const passwordIsError = get().passwordIsError;

    if (
      email !== '' &&
      password !== '' &&
      !emailIsError &&
      !passwordIsError
    ) {
      return true
    } else {
      return false
    }
  }
}))
