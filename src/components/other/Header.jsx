import React from 'react'
import { showSuccessToast } from '../../utils/toastConfig'

const Header = ({ data, changeUser }) => {
    const logOutUser = () => {
        localStorage.setItem("loggedInUser", "")
        changeUser("")
        showSuccessToast('Successfully logged out!')
    }

    return (
        <div className='flex items-end justify-between bg-[#1e1e1e] p-6 rounded-xl shadow-md shadow-black/10'>
            <div>
                <h1 className='text-gray-400 font-bold text-4xl'>Welcome back,</h1>
                <span className='text-3xl font-semibold text-gray-100'>{data?.firstName ? data.firstName : 'Admin'} 👋🏻</span>
            </div>
            <button 
                onClick={logOutUser} 
                className='bg-red-500  hover:bg-red-700 text-white text-3xl rounded-lg px-6 py-2 font-medium transition-all duration-200'
            >
                Log out
            </button>
        </div>
    )
}

export default Header