import { useEffect, useState } from 'react';

const useMockLoad = (value, delay = 1000) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setData(value);
      setLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return { loading, data, setData };
};

export default useMockLoad;
