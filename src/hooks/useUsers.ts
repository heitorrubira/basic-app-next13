import useFetch from "./useFetch";

const API_USERS = '/api/users';

const useUsers = () => useFetch(API_USERS);

export default useUsers;
