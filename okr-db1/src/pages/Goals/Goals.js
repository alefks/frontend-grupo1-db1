import React from "react";
import Menu from "../../components/Menu/Menu";
export default function Goals(){
    return (
        <div> 
            <Menu></Menu>
            <section class="objective-box">
                
                <label class="objName"> 
                    <div class="direction">
                    {">"}
                    </div>
                    Objective Name
                </label>
                <div class="box">
                    <div class="objectives">
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
                    <div class="calendar">
                        <label class="calendar-avaliations">Check Points</label>
                        <ul class="calendar-list">
                            <li class="check">01</li>
                            <li class="check">02</li>
                            <li class="check">03</li>
                            <li class="check">04</li>
                            <li class="check">05</li>
                            <li class="check">06</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}