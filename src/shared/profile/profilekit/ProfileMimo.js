import React, { useContext } from 'react';
import { AuthContext } from '../../../context/Context';

const ProfileMimo = () => {
  const {user}=useContext(AuthContext)
    return (
      <div className="">
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="btn w-24 rounded-full p-2 text-xs"
          onClick={() => document.getElementById("my_modal_5").showModal()}
        >
          Set Profile
        </button>
        <dialog
          id="my_modal_5"
          className="modal modal-bottom sm:modal-middle grad2"
        >
          <div className="modal-box bg-blue-600/50">
            <h3 className="font-bold text-lg">Set Your Profile</h3>
            <div className='m-5 border-b'>
              <label>Image:</label>
              <input className=' p-2 ' type="file" name="name" defaultValue={user.photoUrl} />
            </div>
            <div className='m-5 border-b'>
              <label>Name:</label>
              <input className=' p-2 ' type="text" name="name" defaultValue={user.displayName} />
            </div>
            <div className='m-5 border-b'>
              <label>Email:</label>
              <input className=' p-2 ' type="email" name="name" defaultValue={user.email} readOnly disabled/>
            </div>
            <div className='m-5 border-b'>
              <label>Mobile Number:</label>
              <input className=' p-2 ' type="number" name="name" placeholder='Please enter your mobile number' />
            </div>
            <div className='m-5 border-b'>
              <label>Roll:</label>
              <input className=' p-2 ' type="number" name="name" placeholder='Please enter your roll number' />
            </div>
            <div className='m-5 border-b'>
              <label>Section:</label>
              <input className=' p-2 ' type="number" name="name" placeholder='Please enter yoursection'/>
            </div>
            <div className="modal-action">
              <form method="dialog flex flex-between w-full">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn p-2 rounded-full mx-2 bg-blue-700 ">
                  Submit
                </button>
                <button className="btn p-2 rounded-full mx-2 bg-red-500 ">
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    );
};

export default ProfileMimo;