'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import styles from './searchBar.module.css'

const SearchBar = () => {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState<string>('');


    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(searchQuery.length){

            router.push(`/products/${searchQuery}`)
        }else{
            alert("Nothing to search");
        }
        setSearchQuery('');
    }

    return (
        <form className={styles.form} onSubmit={handleSearch}>
            <input
                className={styles.inputSearch}
                placeholder='Search by name'
                type="text"
                onChange={(e) => setSearchQuery(e.target.value)} value={searchQuery}
                ></input>
            <button className={styles.buttonLupa} type='submit'>
                <svg width="24" height="24" viewBox='0 0 24 24' fill='none' xmlns='http://www.we.org/2000/svg'>
                <circle cx="11" cy="11" r="8" stroke='black' strokeWidth="2" />
                <line x1="21.0001" y1="21" x2="16.6464" y2="16.6464" stroke='black' strokeWidth="2" strokeLinecap='round'/>
                </svg>
            </button>
        </form>
    )
}

export default SearchBar
