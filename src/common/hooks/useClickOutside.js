import { useEffect } from 'react';

const useClickOutside = (refs, callback, enabled = true) => {
    useEffect(() => {
        const judge = (event) => {
            return refs.some((ref) => ref.current?.contains(event.target));
        };
        const handleClickOutside = (event) => {
            if (enabled && refs.length && !judge(event)) {
                callback && callback();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [refs, callback, enabled]);
};

export default useClickOutside;
