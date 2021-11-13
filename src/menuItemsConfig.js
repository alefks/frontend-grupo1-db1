import Team from './img/icons/team.png';
import TeamPartner from './img/icons/team-partner.png';
import Objective from './img/icons/objective.png';
import Key from './img/icons/key.png'
const menuItems = {
    home:[
        {
            route: '/registerteam/new',
            routeText: 'Create New Team',
            icon: Team,
            modal: false,
        },
        {
            route: '/registerteampartner/new',
            routeText: 'Create Team Partner',
            icon: TeamPartner,
            modal: false,
        }
    ],
    objectives:[
        {
            route: '',
            routeText: '',
            modal: false,
        },
        {
            route: '/registerobjectives/',
            routeText: 'Create New Objective',
            icon: Objective,
            modal: false,
        }
    ],
    objective:[
        {
            route: '',
            routeText: '',
            modal: false,
        }
    ],
    keyResults:[
        {
            route: '',
            routeText: '',
            modal: false,
        },
        {
            route: '/registerkeyresult/new',
            routeText: 'New Key Result',
            icon: Key,
            modal: false,
        },
    ],
    team:[
        {
            route: '',
            routeText: '',
            modal: false,
        },
        {
            route: '',
            routeText: 'Add New Team Partner',
            icon: TeamPartner,
            modal: true,
        }
    ],
    checkPoints:[
        {
            route: '',
            routeText: '',
            modal: false,
        }
    ],
    others:[
        {
            route: '',
            routeText: '',
            modal: false,
        }
    ]
}
export default menuItems;