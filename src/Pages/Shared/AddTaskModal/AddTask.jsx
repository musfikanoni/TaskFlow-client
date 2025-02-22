import { useState } from "react";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";

const AddTask = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [timestamp, setTimestamp] = useState("");

  const generateTimestamp = () => {
    return new Date().toLocaleString();
  };


  const onSubmit = async (data) => {
    const taskData = {
      task_id: uuidv4(),
      title: data.title,
      description: data.description,
      category: data.category,
      email: user?.email,
      timestamp: generateTimestamp(),
    };

    try {
      const response = await axiosPublic.post("/task", taskData);

      if (response.data.insertedId) {
        reset();
        Swal.fire({
          title: "Your task was added successfully!",
          icon: "success",
          draggable: true,
        });
      }
    } catch (error) {
      console.error("Error adding task:", error);
      Swal.fire({
        title: "Error adding task",
        text: error.message,
        icon: "error",
      });
    }
  };

  return (
    <div>
      <button
        className="btn"
        onClick={() => {
          document.getElementById("my_modal_3").showModal();
          setTimestamp(generateTimestamp());
        }}
      >
        Add Task
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>

          <div className="hero-content">
            <div className="card bg-base-100 w-full max-w-md shrink-0">
              <div className="card-body p-0 bg-transparent">
                <fieldset className="fieldset">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Title */}
                    <label className="fieldset-label">Title</label>
                    <input
                      type="text"
                      className="input w-full"
                      placeholder="Task title"
                      {...register("title", { required: true, maxLength: 50 })}
                    />
                    {errors.title && <span className="text-red-600">Title is required</span>}
                    {errors.title?.type === "maxLength" && (
                      <span className="text-red-600">Title must be less than 50 characters</span>
                    )}

                    {/* Description */}
                    <label className="fieldset-label">Description</label>
                    <textarea
                      className="textarea w-full"
                      placeholder="Description"
                      {...register("description", { required: true, maxLength: 200 })} 
                    ></textarea>
                    {errors.description && <span className="text-red-600">Description is required</span>}
                    {errors.description?.type === "maxLength" && (
                      <span className="text-red-600">Description must be less than 200 characters</span>
                    )}

                    {/* Auto-generated Timestamp (Read-only) */}
                    <label className="fieldset-label">Timestamp</label>
                    <input
                      type="text"
                      className="input w-full bg-gray-100"
                      value={timestamp}
                      readOnly
                    />

                    {/* Categories */}
                    <label className="fieldset-label">Categories</label>
                    <select className="select join-item w-full" {...register("category", { required: true })}>
                      <option disabled selected>
                        Task categories
                      </option>
                      <option value="To Do">To Do</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Done">Done</option>
                    </select>
                    {errors.category && <span className="text-red-600">Category is required</span>}

                    <button type="submit" className="btn w-full bg-emerald-500 mt-4">
                      Add Task
                    </button>
                  </form>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default AddTask;
