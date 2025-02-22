import { useEffect, useState } from 'react';
import useAuth from './useAuth';

const useTask = () => {
    const{user} = useAuth();

    const [taskList, setTaskList] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(`http://localhost:5000/task?email=${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setTaskList(data);
            setLoading(false);

        })
    }, []);
    return [taskList, loading];
};

export default useTask;