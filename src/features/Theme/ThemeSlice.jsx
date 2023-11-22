import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   theme: localStorage.theme,
}

const themeSlice = createSlice({
   name: 'theme',
   initialState,
   reducers: {
      changeTheme: (state, action) => {
         const data = action.payload
         state.theme = data
      },
   },
})

export const { changeTheme } = themeSlice.actions

export default themeSlice.reducer
