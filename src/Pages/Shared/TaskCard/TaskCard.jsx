import { RiDeleteBin5Line } from "react-icons/ri";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { FiEdit } from "react-icons/fi";
import useTask from "../../../hooks/useTask";
import UpdateModal from "../UpdateModal/UpdateModal";

const TaskCard = ({task}) => {
    const {_id, title, description, category, timestamp} = task;
    const axiosPublic = useAxiosPublic();

    const [,refetch] = useTask();

    const handleDelete = (id) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {

            axiosPublic.delete(`/task/${id}`)
            .then(res => {
                if(res.data.deletedCount > 0){
                  refetch();
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your task has been deleted.",
                    icon: "success"
                  });
                }
            })
            }
          });
    }


    return (
        <div className=" pt-10">
            <div className="card bg-base-100 w-96 shadow-xl">
                <div className="card-body">
                    <div className="flex justify-end gap-3">
                        
                        <UpdateModal></UpdateModal>
                        
                        <button className="flex justify-end text-xl text-red-400" onClick={() => handleDelete(_id)} >
                            <RiDeleteBin5Line />
                        </button>
                    </div>
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <p>Category: <i>{category}</i></p>
                    <p><span>Creation time: </span>{timestamp}</p>
                </div>
            </div>
        </div>
    );
};

export default TaskCard;