import "./App.css";
import LoginContainer from "./login/LoginContainer";
import { CookiesProvider, useCookies } from "react-cookie";
import UserMain from "./userview/UserMain";

function App() {
  const [cookies, setCookie] = useCookies(["user"]);

  function handleLogin(user: string) {
    setCookie("user", user, { path: "/testcookie/" });
  }

  const handleClick = () => {
    setCookie("user", null);
  };

  return (
    <CookiesProvider>
      {cookies.user ? (
        <UserMain user={cookies.user} onClick={handleClick} />
      ) : (
        <LoginContainer onLogin={handleLogin} />
      )}
    </CookiesProvider>
  );
}

export default App;
