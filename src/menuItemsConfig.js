import Team from './img/icons/team.png';
import TeamPartner from './img/icons/team-partner.png';
import Objective from './img/icons/objective.png';
import Home from './img/icons/home.png';
import Key from './img/icons/key.png'
const menuItems = {
    home:[
        {
            route: '/registerteam/new',
            routeText: 'Create New Team',
            icon: Team,
            modal: false,
        },
    ],
    objectives:[
        {
            route: '/',
            routeText: 'Home',
            icon:Home,
            modal: false,
        },
        {
            route: '/registerobjectives/',
            routeText: 'Create New Objective',
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
            routeText: 'Home',
            icon:Home,
            modal: false,
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
            routeText: 'Home',
            icon:Home,
            modal: false,
        },
        {
            route: '/registerkeyresult/',
            routeText: 'New Key Result',
            icon: Key,
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
            routeText: 'Home',
            icon:Home,
            modal: false,
        },
        {
            route: '',
            routeText: 'Add New Team Partner',
            icon: TeamPartner,
            modal: true,
        },
        {
            route: '/registerteampartner/',
            routeText: 'Create Team Partner',
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
            routeText: 'Home',
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
            routeText: 'Home',
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