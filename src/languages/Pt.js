const pt=
    {
        Home:{
            menu:{
                option1:"Criar Novo Time",
                option2:"Mudar Idioma",
            },
            page:{

            }
        },
        Teams:{
            menu:{
                option1:"Início",
                option2:"Editar Nome do Time",
                option3:"Adicionar Integrante",
                option4:"Criar Novo Integrante",
                option5:"Voltar",
            },
            page:{
               
            }
        },
        Objectives:{
            menu:{
                option1:"Início",
                option2:"Criar Novo Objetivo",
                option3:"Voltar",
            },
            page:{
                table:{
                    name:"Objetivos",
                    title:["Nome","Descrição","Data Inicial","Data Final","Gerente"],
                }
            }
        },
        KeyResults:{
            menu:{
                option1:"Início",
                option2:"Criar Nova Chave",
                option3:"Voltar",
            },
            page:{
                table:{
                    name:"Chaves de Resultado",
                    title:["Nome","Descrição","Meta","Responsável","Ultimo Resultado"]
                },
                box:{
                    name:"Datas de Validação de Resultados",
                    name2:"Datas de Validação por Chave",

                }
            }
        },
        CheckPoints:{
            menu:{
                option1:"Início",
                option2:"Voltar",
            },
            page:{
                button:"Salvar",
                
            }
        },
        Relations:{
            menu:{
                option1:"Início",
                option2:"Adciionar Nova Realação",
                option3:"Voltar",
            },
            page:{
                table:{
                    name:"Está Relacionado á: ",
                    title:["Objetivo","Time"],
                }
            }
        },
        Login:{
            menu:{
                option1:"Início",
                option2:"Voltar",
            },
            page:{
                form:{
                    option1:"Nome de Usuário",
                    option2:"Senha de Usuário",
                },
                button:"Logar"
            }
        },
        Notfound:{
            menu:{
                option1:"Início",
                option2:"Voltar",
            },
            page:{

            }
        },
        RegisterTeam:{
            menu:{
                option1:"Início",
                option2:"Voltar",
            },
            page:{
                form:{
                    register:{
                        option1:"Registo de Novo Time",
                        option2:"Nome do Time",
                    },
                    edit:{
                        option1:"Edição de Nome de Time",
                    }
                },
                button:{
                    register:"Registrar",
                    edit:"Salvar"
                }
            }
        },
        RegisterTeamPartner:{
            menu:{
                option1:"Início",
                option2:"Voltar",
            },
            page:{
                form:{
                    register:{
                        option1:"Novo Parceiro de Time",
                        option2:"Nome de Parceiro",
                    },
                    edit:{
                        option1:"Editar Parceiro",
                    }
                },
                button:{
                    register:"Registrar",
                    edit:"Salvar",
                }
            }
        },
        RegisterObjective:{
            menu:{
                option1:"Início",
                option2:"Voltar",
            },
            page:{
                form:{
                    register:{
                        option1:"Novo Objetivo",
                        option2:"Nome de Objetivo",
                        option3:"Frequencia de Avaliação",
                        option4:"Descrição de Objetivo",
                        option5:"Gerente de Objetivo",
                        option6:"Objetivo Relacionado(Time)",
                        option7:"Objetivo Relacionado",
                        option8:"Data de Início do Objetivo",
                        option9:"Data de Fim do Objetivo",                        
                    },
                    edit:{
                        option1:"Edição de Objetivo",
                    }
                },
                button:{
                    register:"Registrar",
                    edit:"Salvar"
                } 
            }
        },
        RegisterKeyResult:{
            menu:{
                option1:"Início",
                option2:"Voltar",
            },
            page:{
                form:{
                    register:{
                        option1:"Nova Chave de Resultado",
                        option2:"Nome de Chave",
                        option3:"Descrição de Chave",
                        option4:"Meta de Chave",
                        option5:"Responsável Pela Nova Chave",
                    },
                    edit:{
                        option1:"Edição de Chave de Resultado",
                    }
                },
                button:{
                    register:"Registrar",
                    edit:"Salvar"
                } 
            }
        },
        AddPartner:{
            page:{
                form:{
                    option1:"Adicionar Parceiro",
                },
                button:"Adicionar"
            }
        },
        AddRelation:{
            page:{
                form:{
                    option1:"Adicionar Relação",
                    option2:"Objetivo Relacionado (Time)",
                    option3:"Objetivo Relacionado"
                },
                button:"Adicionar"
            }
        }

    }
export default pt;