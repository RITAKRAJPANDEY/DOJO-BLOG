import { useState, useEffect } from "react";

export const useFetch = (fetchFn) => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    async function fetchData() {
      try {
        const res = await fetchFn({signal:abortController.signal});
        setData(res.data);
        setError(null);
      } catch (err) {
        if(err.name==="AbortError"){
            console.log("Request aborted")
        }else{
        setError("Something went wrong");
        console.error(err);
        }
      } finally {
        setIsPending(false);
      }
    }

    fetchData();
    return()=>{
        abortController.abort(); // cleanup
    }
  }, []);

  return { data, isPending, error, setData };
};