export const hello = () => {
  const helloAction = {
    type: 'HELLO'
  };
  return helloAction;
};

export const decrement = () => {
  const decrementAction = {
    type: 'DECREMENT'
  };
  return decrementAction;
};

export const increment = () => {
  const incrementAction = {
    type: 'INCREMENT'
  };
  return incrementAction;
};

export const reset = () => {
  const resetAction = {
    type: 'RESET'
  };
  return resetAction;
};
