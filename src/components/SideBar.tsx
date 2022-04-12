import React from 'react'
import { Category } from '../types/category';
import { useState, useEffect } from 'react';
import { listCate } from '../api/category';
import { useNavigate, Link } from 'react-router-dom';

function SideBar() {
    // todo khai báo state 
    const [search, setSearch] = useState<string>('')
    const navigate = useNavigate()
    // console.log(search);
    const onHandleSearch = () => {
        if (search !== '') {
            navigate(`/product/search?q=${search}`)
        }
    }
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
                <form action="">
                    <div className="mt-5 pt-2 relative mx-auto text-gray-600">
                        <input onChange={(e) => setSearch(e.target.value)} className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                            type="search" name="search" placeholder="Search" />
                        <button onClick={() => onHandleSearch()} type="button" className="absolute right-0 top-0 mt-5 mr-4">
                            <svg className="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                                version="1.1" id="Capa_1" x="0px" y="0px"
                                viewBox="0 0 56.966 56.966"
                                width="512px" height="512px">
                                <path
                                    d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                            </svg>
                        </button>
                    </div>
                </form>
                <div>

                    <ul className="space-y-8 tracking-wide mt-8 ">
                        {categories.map((item) => (

                            <li>
                                <Link to={`category/${item._id}`} aria-label="dashboard" className="relative px-4 py-3 flex items-center space-x-4 rounded-xl hover:text-white hover:bg-gradient-to-r from-sky-600 to-cyan-400">
                                    <svg className="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
                                        <path d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z" className="fill-current text-cyan-400 dark:fill-slate-600"></path>
                                        <path d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z" className="fill-current text-cyan-200 group-hover:text-cyan-300"></path>
                                        <path d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z" className="fill-current group-hover:text-sky-300"></path>
                                    </svg>
                                    <span className="-mr-1 font-medium">{item.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>


            </aside>
        </div>
    )
}

export default SideBar