import { configureStore } from '@reduxjs/toolkit'
import lenguajesSlice from './slices/lenguajes.slice'

export default configureStore({
  reducer: {
    lenguajes: lenguajesSlice,

	}
})