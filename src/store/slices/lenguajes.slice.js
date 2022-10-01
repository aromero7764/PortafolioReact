import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const lenguajesSlice = createSlice({
		name: 'lenguajes',
    initialState: "es",
    reducers: {
        
    }
})

export const {  } = lenguajesSlice.actions;

export default lenguajesSlice.reducer;