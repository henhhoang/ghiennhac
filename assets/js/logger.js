export default function logger (reducer) {
    return (prevState, action, args) => {
        console.group(action);
        console.log('prevState: ', prevState);
        console.log('arguments: ', args);
        const nextSate = reducer(prevState, action, args);
        console.log('nextSate: ', nextSate);
        
        console.groupEnd()

        return nextSate
    }

}