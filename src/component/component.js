import Icon from './Icon';
import Navbars from './Navbars';
import CardLineChart from './CardLineChart';
import MainChart from './MainChart';
import BarChart from './BarChart';
import Mtable from './Mtable';

// add components you want to register globally.
// Warning: only use this for small components without much logic as registering a component
// globally can create circular dependencies in some cases. For example when you use the store
// in your component
export default {
  Icon,
  Navbars,
  CardLineChart,
  MainChart,
  BarChart,
  Mtable,
};
