import { useEffect, useState } from "react";

const dynamicRoute = import.meta.env.VITE_DYNAMIC_ROUTE;
export const useFetchDuties = () => {

  const [duties, setDuties] = useState([]);
  const getData = async () => {
    try {
      const response = await fetch(`${dynamicRoute}api/duties`);
      const duties = await response.json();
      setDuties(duties);
    } catch (error) {
      console.log(error);
    }

  }
  useEffect(() => {
    getData()
  }, [])

  return {
    duties
  }
}