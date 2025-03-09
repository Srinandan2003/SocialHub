import dotenv from 'dotenv'
dotenv.config();

const BASE_URL = process.env.REACT_BASE_URL

//post
export const authEndpoints = {
REGISTER_USER_API: BASE_URL + '/users/register',
LOGIN_USERS_API: BASE_URL + '/users/login',
LOGOUT_USERS_API: BASE_URL + '/users/logout',
}


export const profileEndpoints = {
GET_USER_PROFILE : BASE_URL + '/users/profile',  //post
EDIT_USER_PROFILE : BASE_URL + '/users/profile',  //put
}

export const postEndpoints = {
    CREATE_POST : BASE_URL + '/posts/',
    GET_ALL_POSTS : BASE_URL + '/posts/',
    SEARCH_POSTS : BASE_URL + '/posts/search', // Search Posts by Title/Category (GET /api/posts/search?title=example&category=tech)
    GET_SINGLE_POST : BASE_URL + '/posts/',  // Get a Single Post
    EDIT_SINGLE_POST : BASE_URL + '/posts/', //edit posts
    DELETE_SINGLE_POST : BASE_URL + '/posts/', //delete posts
    LIKE_POST : BASE_URL + '/posts/like',   //to be edited
    DISLIKE_POSTS : BASE_URL + '/posts/dislike', // to be edited
}

export const 


