import React from 'react';
import { useNavigate } from 'react-router-dom';
import useToys from '../../hooks/useToys';
import PageTitle from '../Shared/PageTitle/PageTitle';
import './Invertory.css'



const [toys, setToys] = useToys();

const handleDelete = id => {
    const proceed = window.confirm('Are you sure?')
    if (proceed) {
        const url = `https://warm-citadel-87543.herokuapp.com/service/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = toys.filter(toy => toy._id !== id)
                setToys(remaining)
            })
    }
}
return (
    <div>
        <PageTitle title="All Toys"></PageTitle>
        <div className='d-flex mt-4 mb-5'>
            <h3 className='all'>ALL TOYS</h3>
            <button onClick={navigateRegister} class=" hover:bg-red-400 bg-blue-800 py-3 px-6 rounded-full"><a className='flex text-white text-decoration-none' href=""><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" class="svg-inline--fa fa-plus w-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg> Add Toys</a></button>
        </div>

        <div class="container relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Toy Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            IMAGE
                        </th>
                        <th scope="col" class="px-6 py-3">
                            SUPPLIER
                        </th>
                        <th scope="col" class="px-6 py-3">
                            PRICE
                        </th>
                        <th scope="col" class="px-6 py-3">
                            MANAGE
                        </th>
                    </tr>
                </thead>

            </table>
        </div>

        {
            toys.map(toy => <div className="container relative overflow-x-auto shadow-md sm:rounded-lg" key={toy._id}>
                <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                    <tbody>
                        <tr class="bg border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className='px-6'>
                                {toy.name}
                            </td>
                            <td class="px-6 py-4">
                                <img width="60" src={toy.img} alt="" />
                            </td>
                            <td class="px-6 py-4">
                                Md Pranta
                            </td>
                            <td class="px-6 py-4">
                                ${toy.price}
                            </td>
                            <td class="px-6 py-4 text-right">
                                <div className="flex items-center">
                                    <button title="view" className="mr-1 text-indigo-500 hover:text-orange-500 text-xl cursor-pointer">
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="eye" className="svg-inline--fa fa-eye w-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"></path></svg>
                                    </button>
                                    <button title="edit" className="mr-1 text-indigo-500 hover:text-orange-500 text-lg">
                                        <a href="/inventory/inventory">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pen" className="svg-inline--fa fa-pen w-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"></path></svg>
                                        </a>
                                    </button>
                                    <button onClick={() => handleDelete(toy._id)} title="delete" className="text-indigo-500 hover:text-orange-500 text-lg">
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash" className="svg-inline--fa fa-trash w-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"></path></svg>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            )
        }
    </div>
);
};

export default Inventory;