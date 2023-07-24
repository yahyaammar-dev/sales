import React from 'react'
import Button from './Button'

const Block = () => {
    return (
        <div className='bg-white shadow-md sm:rounded-lg flex justify-end p-8 flex-wrap gap-3'>
            <div className='w-full flex gap-2 items-center'>
                <div className="w-2/12">
                    <p className='font-medium'>Group Name</p>
                </div>
                <div className='w-8/12'>
                    <input type='text' className='group--block--input rounded' />
                </div>
                <div className='w-2/12'>
                    <Button text='Add Group' active />
                </div>
            </div>


            <div className='w-full flex gap-2 items-center'>
                <div className="w-2/12">
                    <Button text='Add Phone' active />
                </div>
                <div className="w-2/12">
                    <Button text='Upload Phone .xls' active />
                </div>
                <div className='w-6/12'>
                    <input type='text' className='group--block--input rounded' />
                </div>
                <div className='w-2/12'>
                    <Button text='Start / Stop Calling' active />
                </div>
            </div>

            <div className='w-full flex gap-2 items-center'>
                <div className="w-3/12 flex">
                    <p className='font-medium'>Phone No.</p>
                    <input type='text' className='group--block--input rounded w-1/2' />
                </div>
                <div className="w-2/12">
                    <p className='font-medium'>Display Status</p>
                </div>
                <div className="w-2/12">
                    <Button text='All' active />
                </div>
                <div className="w-2/12">
                    <input type='text' className='group--block--input rounded' placeholder=' /  / ' />
                </div>
                <div className="w-2/12">
                    <img src='/imgs/calendar.svg' />
                </div>
                <div className="w-2/12">
                    <input type='text' className='group--block--input rounded' placeholder=' /  / ' />
                </div>
                <div className="w-2/12">
                    <img src='/imgs/calendar.svg' />
                </div>
                <div className="w-2/12">
                    <Button text='Filter' active />
                </div>
            </div>

        </div>
    )
}

export default Block
