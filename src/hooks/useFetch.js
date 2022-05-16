import axios from 'axios';
import { useEffect, useState } from 'react';

function useFetch(url) {
   const [data, setData] = useState(null);
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState(false);

   useEffect(() => {
      if (!url) return;

      const controller = new AbortController();
      const signal = controller.signal;

      setIsLoading(true);

      axios
         .get(url, { signal })
         .then((res) => {
            setData(res.data);
            setError(false);
         })
         .catch((err) => {
            console.error(err);
            setError(true);
         })
         .finally(() => setIsLoading(false));

      return () =>
         setTimeout(() => {
            controller.abort();
         }, 3000);
   }, [url]);

   return { data, isLoading, error };
}

export default useFetch;
