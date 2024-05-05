import { useEffect, useReducer } from 'react';

type Action = { type: 'increment' } | { type: 'decrement' } | { type: 'set'; value: number };

function reducer(state: number, action: Action) {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'set':
      return action.value;
  }
}

type CounterHook = [
  number,
  {
    increment: () => void;
    decrement: () => void;
  }
];
const useCounter = (initialCount: number, deps?: unknown[]): CounterHook => {
  const [state, dispatch] = useReducer(reducer, initialCount);

  useEffect(() => {
    dispatch({ type: 'set', value: initialCount });
  }, deps);

  return [
    state,
    {
      increment: () => dispatch({ type: 'increment' }),
      decrement: () => dispatch({ type: 'decrement' }),
    },
  ];
};

export default useCounter;
