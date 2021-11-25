import React,{ useState, useEffect } from "react";
import Form from './../Form/Form';
import Button from './../Button/Button';
import Select from './../Select/Select';
import CancelLabel from "../CancelLabel/CancelLabel";
import Title from '../Title/Title';
import Api from "../../api/api";
import Box from "../Box/Box";
import './AddRelation.css';
import { useParams } from "react-router-dom";

export default function AddRelation(props){
    const lang = props.lang.AddRelation.page;
    const {id} = useParams()
    useEffect(() => {
        fetchGetTeamsList()
    }, []);
    const [selectedObjectives, setSelectedObjectives] = useState([]);
    const [showObjectives,setShowObjectives] = useState({display:"none"});
    const teamObjectives=(event)=>{
        const selectElement = event.target;
        if(selectElement.childNodes[selectElement.selectedIndex].value!=="0"){
            const teamId = selectElement.value
            //fetchGetObjectives(teamId);
            setSelectedObjectives(["item1","item2"]);
            setShowObjectives({display:"flex"});
        }else{
            setSelectedObjectives([]);
            setShowObjectives({display:"none"});
        }
    }
    
    const [teamList, setTeamList] = useState([
        {
            id:0,
            name:" "
        }
    ]);

    const fetchGetTeamsList = async () => {
        const response = await Api.getAll('team')
        const result = await response.json()
        result.unshift({
            id:0,
            name:" "
        })
        setTeamList(result)
    }

    const fetchGetObjectives = async (teamId) => {
        const response = await Api.getById('objective', teamId)
        const result = await response.json()
        setSelectedObjectives(result);
    }

    return (
        <Form classname={"form add"}>
            <Title classname="title">
                {lang.form.option1}
                <CancelLabel action={props.closeButton} closeButton={true}/>
            </Title>
            <Title classname="sub-title" htmlfor="inputTeam">{lang.form.option2}</Title>
            <Select 
                name="inputTeam"
                values={teamList} 
                eventAction={teamObjectives}
            ></Select>
            <Box 
                classname="relations"
                style={showObjectives}
            >
                <Title classname="sub-title" htmlfor="inputObjectives">{lang.form.option3}</Title>
                <Select 
                    style={showObjectives}
                    name="inputObjectives"
                    values={selectedObjectives} 
                    eventAction={false}
                ></Select>
            </Box>
            <div className="buttons-group-modal">
            <CancelLabel classname={"button cancel-button"} closeButton={true} action={props.closeButton}>{lang.cancel}</CancelLabel>
                <Button classname="button confirm-button">{lang.button}</Button>
            </div>
        </Form>
    )
}