import React from "react";
import Box from "../../components/Box/Box";
import Form from '../../components/Form/Form';
import Button from '../../components/Button/Button';
import './CheckPoints.css';

export default function CheckPoints(){
    return (
       <div className="body check-points">
           <Form>
                <Box classname="check-point-box">
                    <div className="item-check">
                        <label>item</label>
                        <input></input>
                    </div>
                </Box>
                <Box classname="column">
                    <Box classname="note-block">
                        <textarea className="note" ></textarea>
                    </Box>    
                    <Button>
                        Save    
                    </Button>        
                </Box>
            </Form>
       </div>
    );
}