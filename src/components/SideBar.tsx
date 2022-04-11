import React from 'react'
import { Category } from '../types/category';
import { useState, useEffect } from 'react';
import { listCate } from '../api/category';

function SideBar() {
    const [categories, setCategories] = useState<Category[]>([])
    useEffect(() => {
        (async () => {
            const { data } = await listCate()
            setCategories(data)
        })()
    }, [])
    return (
        <div>
            <aside>
                <div>

                    <ul className="space-y-8 tracking-wide mt-8 ">
                        {categories.map((item) => (

                            <li>
                                <a href="#" aria-label="dashboard" className="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400">
                                    <svg className="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
                                        <path d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z" className="fill-current text-cyan-400 dark:fill-slate-600"></path>
                                        <path d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z" className="fill-current text-cyan-200 group-hover:text-cyan-300"></path>
                                        <path d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z" className="fill-current group-hover:text-sky-300"></path>
                                    </svg>
                                    <span className="-mr-1 font-medium">{item.name}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>


            </aside>
        </div>
    )
}

export default SideBar