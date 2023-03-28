import HomePage from '../pages/home.jsx';
import Places from '../pages/places.jsx';

const RouteList = [
  { name: 'Places', path: '/places', component: Places, exact: false},
  { name: 'Home', path: '*', component: HomePage, exact: false},
]

export default RouteList;