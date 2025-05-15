import toast from 'react-hot-toast';

export const errorHandler = error => {
  const { id, message } = error;
  if (!navigator.onLine || error.code === 'ERR_NETWORK') {
    toast.error('Network error. Please check your connection.');
  } else {
    toast.error(message, { id });
  }
};
