
import React from 'react'

const ButtonCategory = ({categoryName}) => {

    return (
        <div className='p-2'>
            <button className='bg-gray-400 p-2'>{categoryName}</button>
        </div>
    )
}

export default ButtonCategory

