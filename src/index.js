import { transitionEnd } from './transition-end';

const single = document.querySelector('.single');
const multi = document.querySelector('.multi');

transitionEnd(single, () => console.log('single transition end'));
transitionEnd(multi, () => console.log('multi transition end'));
