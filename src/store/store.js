import {configureStore} from '@reduxjs/toolkit';
import resumeReducer from "../slice/resumeSlice";

export default configureStore({
    reducer: {
    resume: resumeReducer,
    },
    });