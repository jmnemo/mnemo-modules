import SequentialTextCalculationPage from './Animations/SequentialTextCalculation';

const COMPONENTS = [
  {
    path: 'component1',
    component: () => <div>component1</div>
  },
  {
    path: 'component2',
    component: () => <div>component2</div>
  },
  {
    path: 'component3',
    component: () => <div>component3</div>
  },
  {
    path: 'component4',
    component: () => <div>component4</div>
  }
];

const ANIMATIONS = [
  {
    path: 'sequential-text-calculation',
    component: SequentialTextCalculationPage
  },
  {
    path: 'animation2',
    component: () => <div>animation2</div>
  },
  {
    path: 'animation3',
    component: () => <div>animation3</div>
  },
  {
    path: 'animation4',
    component: () => <div>animation4</div>
  }
];

const UTILS = [
  {
    path: 'utils1',
    component: () => <div>utils1</div>
  },
  {
    path: 'utils2',
    component: () => <div>utils2</div>
  },
  {
    path: 'utils3',
    component: () => <div>utils3</div>
  },
  {
    path: 'utils4',
    component: () => <div>utils4</div>
  }
];

export default {
  components: COMPONENTS,
  animations: ANIMATIONS,
  utils: UTILS
};
