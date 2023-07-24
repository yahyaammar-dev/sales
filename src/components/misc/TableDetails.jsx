import React, { useState } from 'react'
import Modal from './Modal'

const TableDetail = () => {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <Modal open={open} setOpen={setOpen} />
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">

                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 bg-white">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Group Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Total Phone No.
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Total Answered
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Total Answered
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Created Date/Time
                            </th>
                            <th scope="col" class="px-6 py-3 cursor-pointer">
                                Detail
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                <img class="w-10 h-10 rounded-full" src="/imgs/gallery.svg" alt="Jese image" />
                                <div class="pl-3">
                                    <div class="text-base font-semibold">Neil Sims</div>
                                </div>
                            </th>
                            <td class="px-6 py-4 text-center">
                                105/10283
                            </td>
                            <td class="px-6 py-4 text-center">
                                10
                            </td>
                            <td class="px-6 py-4 text-center">
                                5 mins
                            </td>
                            <td class="px-6 py-4 text-center">
                                12-12-2023
                            </td>
                            <td class="px-6 py-4 text-center cursor-pointer" onClick={() => { setOpen(true) }}>
                                <img src='/imgs/dd.svg'
                                    style={{
                                        background: "#256d85",
                                        padding: "0.2rem",
                                        borderRadius: "0.5rem"
                                    }}
                                />
                            </td>

                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                <img class="w-10 h-10 rounded-full" src="/imgs/gallery.svg" alt="Jese image" />
                                <div class="pl-3">
                                    <div class="text-base font-semibold">Neil Sims</div>
                                </div>
                            </th>
                            <td class="px-6 py-4 text-center">
                                105/10283
                            </td>
                            <td class="px-6 py-4 text-center">
                                10
                            </td>
                            <td class="px-6 py-4 text-center">
                                5 mins
                            </td>
                            <td class="px-6 py-4 text-center">
                                12-12-2023
                            </td>
                            <td class="px-6 py-4 text-center cursor-pointer" onClick={() => { setOpen(true) }}>
                                <img src='/imgs/dd.svg'
                                    style={{
                                        background: "#256d85",
                                        padding: "0.2rem",
                                        borderRadius: "0.5rem"
                                    }}
                                />
                            </td>

                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                <img class="w-10 h-10 rounded-full" src="/imgs/gallery.svg" alt="Jese image" />
                                <div class="pl-3">
                                    <div class="text-base font-semibold">Neil Sims</div>
                                </div>
                            </th>
                            <td class="px-6 py-4 text-center">
                                105/10283
                            </td>
                            <td class="px-6 py-4 text-center">
                                10
                            </td>
                            <td class="px-6 py-4 text-center">
                                5 mins
                            </td>
                            <td class="px-6 py-4 text-center">
                                12-12-2023
                            </td>
                            <td class="px-6 py-4 text-center cursor-pointer" onClick={() => { setOpen(true) }}>
                                <img src='/imgs/dd.svg'
                                    style={{
                                        background: "#256d85",
                                        padding: "0.2rem",
                                        borderRadius: "0.5rem"
                                    }}
                                />
                            </td>

                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                <img class="w-10 h-10 rounded-full" src="/imgs/gallery.svg" alt="Jese image" />
                                <div class="pl-3">
                                    <div class="text-base font-semibold">Neil Sims</div>
                                </div>
                            </th>
                            <td class="px-6 py-4 text-center">
                                105/10283
                            </td>
                            <td class="px-6 py-4 text-center">
                                10
                            </td>
                            <td class="px-6 py-4 text-center">
                                5 mins
                            </td>
                            <td class="px-6 py-4 text-center">
                                12-12-2023
                            </td>
                            <td class="px-6 py-4 text-center cursor-pointer"
                                onClick={() => {
                                    setOpen(true)
                                }}
                            >
                                <img src='/imgs/dd.svg'
                                    style={{
                                        background: "#256d85",
                                        padding: "0.2rem",
                                        borderRadius: "0.5rem"
                                    }}
                                />
                            </td>

                        </tr>

                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default TableDetail