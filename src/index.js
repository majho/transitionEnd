import { onTransitionEnd } from './transition-end';

const single = document.querySelector('.single');
const multi = document.querySelector('.multi');

onTransitionEnd(single, () => console.log('single transition end'));
onTransitionEnd(multi, () => console.log('multi transition end'));
