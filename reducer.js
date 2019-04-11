export const GET_REPOS = 'LOAD';
export const GET_REPOS_SUCCESS = 'LOAD_SUCCESS';
export const GET_REPOS_FAIL = 'LOAD_FAIL';

export default function reducer(state = { repos: [] }, action) {
    switch (action.type) {
        case GET_REPOS:
            console.log("GET_REPOS");
            return { ...state, loading: true };
        case GET_REPOS_SUCCESS:
            console.log("GET_REPOS_SUCCESS");
            return { ...state, loading: false, repos: action.payload.data };
        case GET_REPOS_FAIL:
            console.log("FAIL");
            return { ...state, loading: false, error: action.payload.error };
        default:
            return state;
    }
}

export function listRepos(user) {
    return {
        type: GET_REPOS,
        payload: {
            request: {
                url: `/users/${user}/repos`
            }
        }
    };
}