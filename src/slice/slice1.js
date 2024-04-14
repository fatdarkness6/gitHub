import { createSlice } from '@reduxjs/toolkit'
import { api } from '../../api/userInfo'

   

    const reduxObj = {
        value: api("fatdarkness3").then((e) => {
           return {
                bio: e.bio,
                name: e.name,
                avatar: e.avatar_url
            }
        })
    }

export const slice1 = createSlice( {
    name: 'slice1',
    initialState: reduxObj,
    
})


export const ss1 = slice1.reducer