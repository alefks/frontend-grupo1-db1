import React from "react";
import CheckPointList from "../../components/CheckPointList/CheckPointList";
import DirectionBox from "../../components/DirectionBox/DirectionBox";
import Menu from "../../components/Menu/Menu";
import TitleBox from "../../components/TitleBox/TitleBox";
import './Goals.css';
export default function Goals(){
    return (
        <div className="body"> 
            <Menu></Menu>
            <section class="goals-box">
                <TitleBox classname="task-title goals-name">
                    <DirectionBox />
                   {"Objective Name"}
                </TitleBox>
                <div class="goals-list">
                    <div class="goals">
                        <div class="column">
                            <div class="title">
                                KR'S
                            </div>
                            <div class="obj-item">
                            </div>
                        </div>
                        <div class="column">
                            <div class="title">
                                KEY RESULTS
                            </div>
                            <div class="obj-item">
                            </div>
                        </div>
                        <div class="column">
                            <div class="title">
                                OBJECTIVE OWNER
                            </div>
                            <div class="obj-item">
                            </div>
                        </div>
                        <div class="column">
                            <div class="title">
                                FREQUENCE TIME
                            </div>
                            <div class="obj-item">
                            </div>
                        </div>
                        <div class="column">
                            <div class="title">
                                OBJECTIVE TYPE
                            </div>
                            <div class="obj-item">
                            </div>
                        </div>
                        <div class="column">
                            <div class="title">
                                START DATE
                            </div>
                            <div class="obj-item">
                            </div>
                        </div>
                        <div class="column">
                            <div class="title">
                                FINAL DATE
                            </div>
                            <div class="obj-item">
                            </div>
                        </div>
                        
                    </div>
                    <CheckPointList />                
                </div>
            </section>
        </div>
    );
}