import React from 'react';

const AddTask = () => {
    return (
        <div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>Add Task</button>
            <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
                <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                
  <div className="hero-content">
    <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">

          <label className="fieldset-label">Email</label>
          <input type="email" className="input" placeholder="Email"
           />

          <label className="fieldset-label">Password</label>
          <input type="password" className="input" placeholder="Password" />

          <button className="btn btn-neutral mt-4">Login</button>
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