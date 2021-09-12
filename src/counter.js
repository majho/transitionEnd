export function createCounter() {
    let count = 0;

    return {
        get value() { return count; },
        reset() {
            count = 0;
        },
        increase() {
            count += 1;
        },
        decrease() {
            if (count > 0) count -= 1;
        },
    };
}
