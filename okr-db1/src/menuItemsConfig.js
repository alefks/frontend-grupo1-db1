import Team from './img/icons/team.png';
import TeamPartner from './img/icons/team-partner.png';
import Objective from './img/icons/objective.png';
import AddPartner from './components/AddPartner/AddPartner';
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
            route: '/registerobjectives/new',
            routeText: 'Create New Objective',
            icon: Objective,
            modal: false,
        }
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
            component: AddPartner,
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