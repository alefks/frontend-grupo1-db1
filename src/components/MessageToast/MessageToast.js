import React,{ useState,useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';

export default function MessageToast(props){
        useEffect(()=>{
                toast.dark(props.message,{
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                }); 
        },[]);       
        return(
                <ToastContainer  />
        );
}