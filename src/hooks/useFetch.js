import { useEffect, useState } from "react";

export default function useFetch(url, options) {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(url, options);
        const jsonResponse = await response.json();
        setResult(jsonResponse);
        setLoading(false);
      } catch (e) {
        setError(e);
        setLoading(false);
      }
    })();
  }, [options, url]);

  return { loading, result, error };
}
