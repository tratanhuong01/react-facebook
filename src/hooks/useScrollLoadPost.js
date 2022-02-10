import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import api from "../api/api";

const useScrollLoadPost = (ref) => {
    const [postDetails, setPostDetais] = useState([]);
    const [index, setIndex] = useState(0);
    const { user, headers } = useSelector((state) => {
        return {
            user: state.user,
            headers: state.headers
        }
    });
    useEffect(() => {
        //
        let unmounted = false;
        const fetch = async (index) => {
            const result = await api(`posts/home/${user.id}?offset=${index}&limit=10`, "GET", null, headers);
            if (unmounted) return;
            setPostDetais([...postDetails].concat(result.data));
        }
        if (headers.Authorization) {
            fetch(index);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [headers, user]);
    // useEffect(() => {
    //     let handleScroll = () => {

    //     };
    //     if (ref && ref.current) {
    //         ref.current.addEventListener('scroll', handleScroll);
    //     }
    //     return () => {
    //         if (ref && ref.current) {
    //             ref.current.removeEventListener('scroll', handleScroll);
    //         }
    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [index]);
    return { index, postDetails, setIndex };
}

export default useScrollLoadPost;