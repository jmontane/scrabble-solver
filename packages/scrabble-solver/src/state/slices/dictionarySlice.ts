import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WordDefinition } from '@scrabble-solver/models';

import dictionaryInitialState from './dictionaryInitialState';

const dictionarySlice = createSlice({
  initialState: dictionaryInitialState,
  name: 'dictionary',
  reducers: {
    changeInput: (state, action: PayloadAction<string>) => {
      return { ...state, input: action.payload };
    },

    reset: () => dictionaryInitialState,

    submit: (state) => {
      return {
        ...state,
        definitions: dictionaryInitialState.definitions,
        isAllowed: null,
        isLoading: true,
        word: state.input,
      };
    },

    submitFailure: (state) => {
      return {
        ...state,
        definitions: dictionaryInitialState.definitions,
        isAllowed: false,
        isLoading: false,
      };
    },

    submitSuccess: (state, action: PayloadAction<WordDefinition>) => {
      return {
        ...state,
        definitions: action.payload.definitions,
        isAllowed: action.payload.isAllowed,
        isLoading: false,
        word: action.payload.word,
      };
    },
  },
});

export default dictionarySlice;
