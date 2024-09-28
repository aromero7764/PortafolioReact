import { configureStore } from '@reduxjs/toolkit';
import lenguajesSlice from './slices/lenguajes.slice';

export default configureStore({
  reducer: {
    lenguajes: lenguajesSlice,
  },
  devTools: process.env.NODE_ENV === 'development', // DevTools solo habilitado en desarrollo
});
