import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Field from "../common/Field";

const LoginForm = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError 
  } = useForm();
  const submitForm = async (formData) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/auth/login`,
        formData);
        if(response.status===200){
          const{user,token}=response.data;
          if(token){
            const authToken=token.token;
            const refreshToken=token.refreshToken;
            console.log(`Login time auth token:${authToken}`)
            setAuth({ user,authToken,refreshToken });
            navigate("/");
          }

        }
     
      
    } catch (error) {
      console.log(error);
      setError('root.random',{
        type:'random',
        message:`User with email ${formData.email} is not found`
      })
    }
  };
  return (
    <div>
      <form
        className="border-b border-[#3F3F3F] pb-10 lg:pb-15"
        onSubmit={handleSubmit(submitForm)}
      >
        <Field label="Email" error={errors.email}>
          <input
            {...register("email", { required: "Email Id is required" })}
            className={`auth-input ${
              errors.email ? "border-red-500" : "border-gray-200"
            }`}
            type="email"
            name="email"
            id="email"
          />
        </Field>
        <Field label="password" error={errors.password}>
          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Your password must be at least 8 character",
              },
            })}
            className={`auth-input ${
              errors.email ? "border-red-500" : "border-gray-200"
            }`}
            type="password"
            name="password"
            id="password"
          />
        </Field>
        <p>{errors?.root?.random?.message}</p>
        <Field>
          <button
            className="auth-input bg-lwsGreen font-bold text-deepDark mt-3 transition-all hover:opacity-90"
            type="submit"
          >
            Login
          </button>
        </Field>
      </form>
    </div>
  );
};

export default LoginForm;
