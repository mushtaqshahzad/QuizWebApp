import React from 'react'
import { Box } from '@mui/material'
import SearchIcon from '../../img/Search.png'

export default function SearchBar(): JSX.Element {
    return (
        <Box className="search">
            <img className="input-icon" src={SearchIcon} alt="SearchIcon" />
            <input className="input-field" />
            <button className="search-btn" type="submit">
                Search
            </button>
        </Box>
    )
}
