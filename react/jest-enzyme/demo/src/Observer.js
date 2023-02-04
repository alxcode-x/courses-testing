
const mouseClick = (target, type) => {
    return {
        subscribe: observer => {
            target.addEventListener(type, observer.next);

            return {
                unsubscribe: () => {
                    target.removeEventListener(type, observer.next);
                }
            }
        }
    }
}

export { mouseClick }