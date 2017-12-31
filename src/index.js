function getTransitionCount(el) {
    const style = window.getComputedStyle(el);
    const properties = style.transitionProperty.split(',');

    return properties.length;
}

function onTransitionEnd(el, fn) {
    const count = getTransitionCount(el);
    const eventName = 'transitionend';
    let ended = 0;

    function reset() {
        ended = 0;
    }

    function callback() {
        reset();
        fn(el);
    }

    function onEnd(e) {
        if (e.target !== el) return;
        ended += 1;
        if (ended >= count) callback();
    }

    function removeListener() {
        el.removeEventListener(eventName, onEnd);
        reset();
    }

    el.addEventListener(eventName, onEnd);

    return removeListener;
}

export default onTransitionEnd;
