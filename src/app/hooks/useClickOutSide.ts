import { useEffect } from 'react';

export const useClickOutSide = (ref: React.MutableRefObject<HTMLElement>, clickOutsideHandler: () => void) => {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        clickOutsideHandler();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [clickOutsideHandler, ref]);
};
