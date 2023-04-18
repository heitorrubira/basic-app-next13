import useFetch from "./useFetch";

const API_USER_BY_ID = '/api/user/';

const useUser = (id: number | string) => useFetch(API_USER_BY_ID + id);

export default useUser;
