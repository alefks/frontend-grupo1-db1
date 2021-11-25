const en=
    {
        Home:{
            menu:{
                option1:"Create New Team",
                option2:"Change Language"
            },
            page:{
                title:"Teams",
            }
        },
        Teams:{
            menu:{
                option1:"Home",
                option2:"Edit Team Name",
                option3:"Add New Team Partner",
                option4:"Create Team Partner",
                option5:"Turn Back",
            },
            page:{
                titlePartner:"Team Partners",
                titleQuarters:"Quarters",
            }
        },
        Objectives:{
            menu:{
                option1:"Home",
                option2:"Create New Objective",
                option3:"Turn Back",
            },
            page:{
                table:{
                    name:"Objectives",
                    title:["Name","Description","Start Date","End Date","Manager"],
                }
            }
        },
        KeyResults:{
            menu:{
                option1:"Home",
                option2:"New Key Result",
                option3:"New Check in",
                option4:"Edit Check in",
                option5:"Turn Back",
            },
            page:{
                table:{
                    name:"Key Results",
                    title:["Name","Description","Goal","Responsible","Last Status"]
                },
                box:{
                    name:"Checkin Dates",
                    name2:"Check in Dates By Key Result",

                }
            }
        },
        CheckPoints:{
            menu:{
                option1:"Home",
                option2:"Turn Back",
            },
            page:{
                button:"Save",
                titleCheck:"Check point",
                titleNote:"Notepad"
                
            }
        },
        Relations:{
            menu:{
                option1:"Home",
                option2:"Add New Realtion",
                option3:"Turn Back",
            },
            page:{
                table:{
                    name:"Related to: ",
                    title:["Objective","Team"],
                }
            }
        },
        Login:{
            menu:{
                option1:"Home",
                option2:"Turn Back",
            },
            page:{
                form:{
                    option1:"User Name",
                    option2:"User Password",
                },
                button:"Login"
            }
        },
        Notfound:{
            menu:{
                option1:"Home",
                option2:"Turn Back",
            },
            page:{

            }
        },
        RegisterTeam:{
            menu:{
                option1:"Home",
                option2:"Turn Back",
            },
            page:{
                form:{
                    register:{
                        option1:"New Team",
                        option2:"Team Name",
                    },
                    edit:{
                        option1:"Edit Team",
                    }
                },
                button:{
                    register:"Register",
                    edit:"Save"
                }
            }
        },
        RegisterTeamPartner:{
            menu:{
                option1:"Home",
                option2:"Turn Back",
            },
            page:{
                form:{
                    register:{
                        option1:"New Team Partner",
                        option2:"Team Partner Name",
                    },
                    edit:{
                        option1:"Edit Team Partner",
                    }
                },
                button:{
                    register:"Register",
                    edit:"Save",
                }
            }
        },
        RegisterObjective:{
            menu:{
                option1:"Home",
                option2:"Turn back",
            },
            page:{
                form:{
                    register:{
                        option1:"New Objective",
                        option2:"Objective Name",
                        option3:"Key Result Frequency",
                        option4:"Key Result Description",
                        option5:"Objective Manager",
                        option6:"Relational Objective (Team)",
                        option7:"Relational Objective",
                        option8:"Start Date",
                        option9:"End Date",                        
                    },
                    edit:{
                        option1:"Edit Objective",
                    }
                },
                button:{
                    register:"Register",
                    edit:"Save"
                } 
            }
        },
        RegisterKeyResult:{
            menu:{
                option1:"Home",
                option2:"Turn Back",
            },
            page:{
                form:{
                    register:{
                        option1:"New Key Result",
                        option2:"Key Result Name",
                        option3:"Key Result Description",
                        option4:"Key Result Goal",
                        option5:"Key Result Responsible",
                    },
                    edit:{
                        option1:"Edit Key Result",
                    }
                },
                button:{
                    register:"Register",
                    edit:"Save"
                } 
            }
        },
        AddPartner:{
            page:{
                form:{
                    option1:"Add New Team Partner",
                },
                button:"Add",
                cancel:"Cancelar"
            }
        },
        AddRelation:{
            page:{
                form:{
                    option1:"Add New Relation",
                    option2:"Relational Objective (Team)",
                    option3:"Relational Objective"
                },
                button:"Add",
                cancel:"Cancelar"
            }
        },
        DeleteItem:{
            page:{
                text:"Are you really sure? \n about deleting this?",
                button:"Confirm",
                cancel:"Cancel"
            }
        }

    }
export default en;