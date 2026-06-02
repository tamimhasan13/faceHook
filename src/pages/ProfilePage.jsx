import { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";
import { useProfile } from "../hooks/useProfile";
import { actions } from "../actions";

const ProfilePage = () => {
  const {state,dispatch}=useProfile();
  const { auth } = useAuth();
  const { api } = useAxios();
  useEffect(() => {
    dispatch({type:actions.profile.DATA_FETCHING})
    const fetchProfile = async () => {
      try {
        const response = await api.get(`${import.meta.env.VITE_SERVER_BASE_URL}/profile/${auth?.user?.id}`);
        if(response.status===200){
          dispatch({type:actions.profile.DATA_FETCHED,data:response.data})
        }
      } catch (error) {
        console.log(error);
        dispatch({type:actions.profile.DATA_FETCH_ERROR,error:error.message})
      }
    };
    fetchProfile();
  }, []);
  if(state?.loading){
    return <div>Fetching your profile data...</div>
  }
  return (
    <div>
      Welcome,{state?.user?.firstName} {""} {state?.user?.lastName}
      <p>You have {state?.posts.length} posts</p>
    </div>
  );
};

export default ProfilePage;
