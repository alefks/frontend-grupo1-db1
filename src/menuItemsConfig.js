import Team from './img/icons/team.png';
import TeamPartner from './img/icons/team-partner.png';
import Relations from './img/icons/menu-relations.png';
import Objective from './img/icons/objective.png';
import Home from './img/icons/home.png';
import Key from './img/icons/key.png';
import LanguageIcon from './img/icons/language.png';
import Language from './languages/Language';
import CheckPoint from './img/icons/checkpoint.png';
const menuItems = {
    home:[
        {
            route: '/registerteam/new',
            routeText: Language.Home.menu.option1,
            icon: Team,
            modal: false,
        },
        {
            route: '/changelanguage',
            routeText: Language.Home.menu.option2,
            icon: LanguageIcon,
            modal: false,
        },
    ],
    objectives:[
        {
            route: '/',
            routeText: Language.Objectives.menu.option1,
            icon:Home,
            modal: false,
        },
        {
            route: '/team/registerobjectives/',
            routeText: Language.Objectives.menu.option2,
            icon: Objective,
            modal: false,
        },
        {
            route: '',
            routeText: '',
            modal: false,
        },

    ],
    relations:[
        {
            route: '/',
            routeText: Language.Relations.menu.option1,
            icon:Home,
            modal: false,
        },
        {
            route: '',
            routeText: Language.Relations.menu.option2,
            icon: Relations,
            modal: true,
        },
        {
            route: '',
            routeText: '',
            modal: false,
        }
    ],
    keyResults:[
        {
            route: '/',
            routeText: Language.KeyResults.menu.option1,
            icon:Home,
            modal: false,
        },
        {
            route: '/team/objective/registerkeyresult/',
            routeText: Language.KeyResults.menu.option2,
            icon: Key,
            modal: false,
        },
        {
            route: '/team/objective/keyresults/checkpoint/',
            routeText: Language.KeyResults.menu.option3,
            icon: CheckPoint,
            modal: false,
        },
        {
            route: '/team/objective/keyresults/checkpoint/edit',
            routeText: Language.KeyResults.menu.option4,
            icon: CheckPoint,
            modal: false,
        },
        {
            route: '',
            routeText: '',
            modal: false,
        },
    ],
    team:[
        {
            route: '/',
            routeText: Language.Teams.menu.option1,
            icon:Home,
            modal: false,
        },
        {
            route: '/registerteam/',
            routeText: Language.Teams.menu.option2,
            icon: Team,
            modal: false,
        },
        {
            route: '',
            routeText: Language.Teams.menu.option3,
            icon: TeamPartner,
            modal: true,
        },
        {
            route: '/team/registerteampartner/',
            routeText: Language.Teams.menu.option4,
            icon: TeamPartner,
            modal: false,
        },
        {
            route: '',
            routeText: '',
            modal: false,
        },
    ],
    checkPoints:[
        {
            route: '/',
            routeText: Language.CheckPoints.menu.option1,
            icon:Home,
            modal: false,
        },
        {
            route: '',
            routeText: '',
            modal: false,
        }
    ],
    others:[
        {
            route: '/',
            routeText: Language.Notfound.menu.option1,
            icon:Home,
            modal: false,
        },
        {
            route: '',
            routeText: '',
            modal: false,
        }
    ]
}
export default menuItems;