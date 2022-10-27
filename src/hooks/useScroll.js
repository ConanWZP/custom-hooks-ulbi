import {useEffect, useRef} from "react";

/*
export const useScroll = (parentRef, childRef, callback) => {
    const observer = useRef();


    useEffect(() => {
        const options = {
            root: parentRef.current,
            rootMargin: '0px',
            threshold: 0
        }
        observer.current = new IntersectionObserver(([target]) => {
            if (target.isIntersecting) {
                console.log('достигли')
                callback()
            }
        }, options)

        observer.current.observe(childRef.current)
        return function () {
            observer.current.unobserve(childRef.current)
        }
    }, [callback])
}*/

export const useScroll = (parentRef, childRef, callback) => {
    const observer = useRef();

    useEffect(() => {
        const options = {
            root: parentRef.current

        }
        /*var callback = function(entries, observer) {
            /!* Content excerpted, show below *!/
        };*/
        observer.current = new IntersectionObserver(([target]) => {
            if (target.isIntersecting) {
                console.log('smthing')
                callback()
            }
        }, options);
        observer.current.observe(childRef.current)
        return function () {
            observer.current.unobserve(childRef.current)
        }
    }, [callback])
}