import { useCallback, useEffect, useState } from 'react';
import { IApiState } from '../types/baseTypes';

export const useFetch = <T>(fn: () => Promise<T>, deps = []) => {
  const [result, setResult] = useState<IApiState<T>>({
    loading: true,
  });

  const doFetch = useCallback(async () => {
    if (!fn) return;
    setResult({
      ...result,
      error: null,
      loading: true,
    });

    try {
      const response = await fn();
      setResult({
        data: response,
        loading: false,
      });
    } catch (error) {
      setResult({
        ...result,
        error,
        loading: false,
      });
    }
  }, [fn, result]);

  useEffect(() => {
    doFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return { ...result, refetch: doFetch } as IApiState<T>;
};
