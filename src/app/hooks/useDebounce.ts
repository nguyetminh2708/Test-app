import { useEffect, useCallback, DependencyList } from 'react';
function useDebounce(effect: () => void, dependencies: DependencyList, delay = 300) {
  const callback = useCallback(effect, dependencies);

  useEffect(() => {
    const timeout = setTimeout(callback, delay);
    return () => clearTimeout(timeout);
  }, [callback, delay]);
}

export default useDebounce;
