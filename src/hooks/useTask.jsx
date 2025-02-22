// import { useEffect, useState } from 'react';
import useAuth from './useAuth';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useTask = () => {
    const{user} = useAuth();

    const axiosPublic = useAxiosPublic();
    const { data: task = [] } = useQuery({
        queryKey: ['task'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/task?email=${user?.email}`)
            return res.data;
        }
    })

    return [task]

    // const [taskList, setTaskList] = useState([]);
    // const [loading, setLoading] = useState(true);
    // useEffect(() => {
    //     fetch(`http://localhost:5000/task?email=${user?.email}`)
    //     .then(res => res.json())
    //     .then(data => {
    //         setTaskList(data);
    //         setLoading(false);

    //     })
    // }, []);
    // return [taskList, loading];
};

export default useTask;