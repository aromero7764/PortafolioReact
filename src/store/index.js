import { configureStore } from '@reduxjs/toolkit'
import lenguajesSlice from './slices/Lenguajes.slice'

export default configureStore({
  reducer: {
    lenguajes: lenguajesSlice,

	}
})