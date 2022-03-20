import { useEffect, useState } from "react";
import { getPhones } from "../helpers/getPhones";

export const usePhones = () => {

    const [dataDashoboard, setDataDashboard] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
      setTimeout(() => {
        getPhones().then(phones => {
            setDataDashboard({
                data: phones,
                loading: false
            })
        })
      }, 3000);
    }, [])
    
    return dataDashoboard;

}