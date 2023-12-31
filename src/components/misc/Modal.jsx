import React from "react";
import { useNavigate } from "react-router-dom";


const Modal = ({ open, setOpen }) => {
    const data = [
        { id: 1, name: 'John', message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ", date: '02-12-2022', user: '1' },
        { id: 2, name: 'Jane', message: "It has survived not only five centuries", date: '02-12-2022', user: '2' },
        { id: 3, name: 'Bob', message: "All with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", date: '02-12-2022', user: '2' },
        { id: 4, name: 'Jane', message: "when an unknown printer took a galley of type and scrambled it to maket it.", date: '02-12-2022', user: '1' },
        { id: 5, name: 'Bob', message: "Software like Aldus PageMaker including versions of Lorem Ipsum.", date: '02-12-2022', user: '1' },
        { id: 6, name: 'Bob', message: "All with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", date: '02-12-2022', user: '2' },
        { id: 7, name: 'Jane', message: "when an unknown printer took a galley of type and scrambled it to maket it.", date: '02-12-2022', user: '1' },
        { id: 8, name: 'Bob', message: "Software like Aldus PageMaker including versions of Lorem Ipsum.", date: '02-12-2022', user: '1' },
        { id: 9, name: 'Bob', message: "All with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", date: '02-12-2022', user: '2' },
        { id: 10, name: 'Jane', message: "when an unknown printer took a galley of type and scrambled it to maket it.", date: '02-12-2022', user: '1' },
        { id: 11, name: 'Bob', message: "Software like Aldus PageMaker including versions of Lorem Ipsum.", date: '02-12-2022', user: '1' }
    ]
    const navigate = useNavigate()
    const handleHomeNav = () => {
        navigate('/')
    };
    return (
        <>
            {open && (
                <>
                    <div
                        id="readProductModal"
                        tabindex="-1"
                        aria-hidden="true"
                        className="open overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full"
                    >
                        <div className="custom__modal relative p-4 w-full max-w-2xl h-full md:h-auto">
                            <div className="chatroom bg-white font-sans">
                                <header className=" bg-white h-2xl px-10 py-2 z-10">
                                    <div className="flex gap-5 justify-between">
                                        <h1 className="text-lg font-bold" style={{ color: "#377D8D" }}>Call details</h1>
                                        <div className="flex gap-6">
                                            <div className="flex gap-2">
                                                <button className="bg-gray-300 text-sm px-1 py-1 border border-black font-medium rounded-sm">Last Pass</button>
                                                <button className="bg-gray-300 text-sm px-1 py-1 border border-black font-medium rounded-sm">Next Pass</button>
                                            </div>
                                            <div className="flex items-center">
                                                <button>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div className="flex items-center">
                                                <button onClick={() => { setOpen(false) }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                                        <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd" />
                                                    </svg>

                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-between items-center">
                                        <div className="flex flex-col gap-2">
                                            <p className="font-serif font-medium text-sm">Testing-083474376473</p>
                                            <div className="mb-5">
                                                <p className="text-sm">Celler Id: 34345434</p>
                                                <p className="text-sm">Call duration: 323</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-1">
                                            <button className="bg-blue-500 text-xs px-1 py-1 border rounded-xl text-white" style={{ backgroundColor: "#377D8D" }}>To be screend</button>
                                            <button className="bg-blue-900 text-xs px-1 py-1 border rounded-xl text-white" style={{ backgroundColor: "#677B7C" }}>To be classified</button>
                                        </div>
                                        <div className="flex gap-2">
                                            <button>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" style={{ color: "#377D8D" }}>
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                                                </svg>

                                            </button>
                                            <button>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6" style={{ color: "#377D8D" }}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                                </svg>
                                            </button>
                                            <button>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6" style={{ color: "#377D8D" }}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="border border-gray-200">
                                    </div>
                                </header>
                                <div>
                                    {data &&
                                        data.map((userMessage) => {
                                            console.log(userMessage.user);
                                            if (userMessage.user == '1') {
                                                return (
                                                    <div className="px-10 py-2 z-0">
                                                        <div className="flex gap-5 my-2">
                                                            <div>
                                                                <div className="bg-gray-200 border border-gray-200 rounded-3xl w-12 h-12" />
                                                            </div>
                                                            <div>
                                                                <div className="div flex justify-between">
                                                                    <div className="flex items-center justify-start gap-2">
                                                                        <h4 className="text-bold font-serif text-lg">John James </h4>
                                                                        <p>{userMessage.date}</p>
                                                                        <button>
                                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 " style={{ color: "#377D8D" }}>
                                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                                                                            </svg>
                                                                        </button>
                                                                    </div>
                                                                    <div className="flex">
                                                                        <p>Matching Keyword: </p>
                                                                        <div>
                                                                            <p className="bg-gray-300 rounded m-0 p-2 text-white">Yes</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="w-4/5 border rounded-lg">
                                                                    <p className="bg-gray-100 px-4 py-3">
                                                                        {userMessage.message}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                            else {
                                                return (
                                                    <div className="px-10 py-2 z-0">
                                                        <div className="flex gap-5 flex-row-reverse my-2">
                                                            <div>
                                                                {/* <div className="bg-gray-200 border border-gray-200 rounded-3xl w-12 h-12" /> */}
                                                                <img src='/imgs/bot.svg' />

                                                            </div>
                                                            <div className="flex flex-col justify-end">
                                                                <div className="flex items-center justify-start flex-row-reverse gap-10">
                                                                    <h4 className="text-bold font-serif text-lg">Bot </h4>
                                                                    <p>{userMessage.date}</p>
                                                                    <button>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10" style={{ color: "#377D8D" }}>
                                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                                                                        </svg>

                                                                    </button>
                                                                </div>
                                                                <div className="flex flex-col justify-end">
                                                                    <p className="self-end px-4 border rounded-lg py-3 w-4/5 text-left text-white" style={{ backgroundColor: "#377D8D" }}>
                                                                        {userMessage.message}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            }

                                        })}
                                </div>

                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Modal;