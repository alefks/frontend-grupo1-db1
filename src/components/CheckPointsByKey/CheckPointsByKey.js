import React,{useState,useEffect} from 'react';
import Box from '../Box/Box';
import CheckPointStatusByItem from './../CheckPointStatusItem/CheckPointStatusItem';
import './CheckPointsByKey.css';
export default function CheckPointsByKey(props){
    const [keyResultCheckPoints, setKeyResultCheckPoints] = useState([2, 3, 5])
    useEffect(()=>{
       
    },[props.keyResultId]);
    return (
        <div className="by-key">
            <Box classname="boxtitle boxtitle2">{props.lang.box.name2}</Box>
            <Box classname="box-by-key">
                {
                    keyResultCheckPoints.map((CheckPoint, index)=>(
                        <CheckPointStatusByItem key="index" />
                    ))
                }
            </Box>
        </div>
    );
}