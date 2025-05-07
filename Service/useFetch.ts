import {useEffect, useState} from "react";


const useFetch = <T>(FetchMovie:()=>Promise<T>)=>{
    const [data ,setData]=useState(<T | null>null);
    const [error,setError]=useState(false);
    const [loading,setLoading]=useState(false);

    const fetchMovie = async ()=>{
        try{
            setLoading(true);
            const data = await FetchMovie();
            setData(data);
            setError(false);
        }catch(err){
            setError(true);
        }
        finally {
            setLoading(false);
        }


    }

    useEffect(()=>{
        fetchMovie();
    },[])
    return {data,error,loading}
}

export default useFetch;