import { useRef, useEffect } from "react";

const MountEffectComponent = () => {
    const hasMounted = useRef(false);
    useEffect(() => {
        if (!hasMounted.current) {

            console.log('Component mounted for the first time');
            hasMounted.current = true;
        }
    }, []);
    return <div>Check the console for the mount message.</div>;
}
export default MountEffectComponent