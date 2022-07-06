import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getPost = createAsyncThunk(
    "getPost",
    async function (data, { dispatch }) {
        const responce = await fetch('https://jsonplaceholder.typicode.com/posts')
        const posts = await responce.json()


        console.log(posts);
    }
)

export const getPostById = createAsyncThunk(
    'getPostById',
    async function (data, { dispatch }) {
        const responce = fetch(`https://jsonplaceholder.typicode.com/posts/${data}`)
        const post = await responce.json()
        console.log('post :', post);
    }
)

const fetchSlice = createSlice({
    name: 'fetchSlice',
    initialState: {
        posts: [],
        post: {
            title: '',
            body: ''
        }
    },
    reducers: {
        getPostAction(state, action) {
            state.posts = action.payload
        },
        getPostByIdAction(state, action) {
            state.post = action.payload
        }
    }
})

export const { getPostAction, getPostByIdAction } = fetchSlice.actions
export default fetchSlice.reducer