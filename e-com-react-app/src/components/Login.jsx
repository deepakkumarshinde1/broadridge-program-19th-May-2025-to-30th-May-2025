import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

function Login() {
  let loginSuccess = (response) => {
    localStorage.setItem("l_token", response.credential);
    window.location.replace("/");
  };
  let loginFail = () => {
    console.log("Login Failed");
  };
  return (
    <center>
      <h1>Login</h1>
      <GoogleOAuthProvider clientId={CLIENT_ID}>
        <GoogleLogin onSuccess={loginSuccess} onError={loginFail} />
      </GoogleOAuthProvider>
    </center>
  );
}
//

export default Login;
