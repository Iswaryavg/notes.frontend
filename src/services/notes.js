import { ActionCreators } from '../redux/notesReducer';
import * as axios from 'axios';
const axiosInstance = axios.create({
    baseURL:"https://localhost:44381/Notes",
})

export const GetNotes = async (dispatch) => {
    try {
        // api call
        const { data } = await axiosInstance.get();
        dispatch(ActionCreators.setNotes(data));
    } catch {
        console.log('Error!');
    }
}

export const DeleteNote = async (dispatch, note) => {
    try {
        // api call
        await axiosInstance.delete(`/${note.id}`);
        dispatch(ActionCreators.deleteNote(note));
    } catch {
        console.log('Error!');
    }
}

export const NewNote = async (dispatch, note) => {
    try {
        // api call
        const { data } = await axiosInstance.post('', note)
        dispatch(ActionCreators.newNote(data));
    } catch {
        console.log('Error!');
    }
}

export const EditNote = async (dispatch, note) => {
    try {
        // api call
        await axiosInstance.put('', note);
        dispatch(ActionCreators.editNote(note));
    } catch {
        console.log('Error!');
    }
}
