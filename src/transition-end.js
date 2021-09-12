import { createCounter } from './counter';

export function onTransitionEnd(el, fn) {
    const count = createCounter();

    function onStart(e) {
        if (e.target !== el) return;
        count.increase();
    }

    function onCancel(e) {
        if (e.target !== el) return;
        count.decrease();
    }

    function onEnd(e) {
        if (e.target !== el) return;
        count.decrease();

        if (count.value === 0) {
            fn(el);
        }
    }

    el.addEventListener('transitionstart', onStart);
    el.addEventListener('transitioncancel', onCancel);
    el.addEventListener('transitionend', onEnd);

    return () => {
        el.removeEventListener('transitionstart', onStart);
        el.removeEventListener('transitioncancel', onCancel);
        el.removeEventListener('transitionend', onEnd);

        count.reset();
    };
}
