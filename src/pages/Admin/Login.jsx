import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:4000/auth/login", {
        username,
        password,
      });

      const { token } = response.data;
      console.log("Token recebido:", response.data);


      if (token) {
        localStorage.setItem("authToken", token);

        navigate("/admin");
        setError("");
      }
    } catch (erro) {
      console.error("Erro ao efetuar o login", erro);
      setError("Credenciais inválidas");
    }
  }

  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center flex-col bg-primaryDark p-6">
        <form
          onSubmit={handleSubmit}
          className="bg-primaryDark2 p-8 rounded-lg shadow-lg w-full max-w-sm"
        >
          <h2 className="text-primaryLight text-2xl font-bold mb-6 text-center">
            Login Administrador
          </h2>

          {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

          <label className="block mb-2 text-secondaryLight">Email</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            required
            className="w-full mb-4 p-2 rounded bg-primaryDark placeholder-secondaryLight text-primaryLight"
            placeholder="Digite um Usuário"
          />

          <label className="block mb-2 text-secondaryLight">Senha</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full mb-6 p-2 rounded bg-primaryDark placeholder-secondaryLight text-primaryLight"
            placeholder="********"
          />

          <button
            type="submit"
            className="w-full bg-primaryMid hover:bg-primaryLight text-white font-semibold py-2 rounded transition-colors"
          >
            Entrar
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Login;
