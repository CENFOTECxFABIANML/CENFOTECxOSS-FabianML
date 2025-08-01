import "./application.css";
import "@hotwired/turbo-rails";

// 0. Lógica para registrar los componentes de React
import ReactOnRails from "react-on-rails";
import withProviders from "../lib/withProviders";

// 1. Importa los componentes de Devise
import SignInComponent from "../components/devise/SignIn";
import SignUpComponent from "../components/devise/SignUp";
import ForgotPasswordComponent from "../components/devise/ForgotPassword";

// 2. Importa tus componentes originales
import NavbarComponent from "../components/layout/Navbar";
import HomeComponent from "../components/home/Home";
import PostsViewerComponent from "../components/posts/PostsViewer";


// 3. Envuelve cada componente que necesite los providers
const SignIn = withProviders(SignInComponent);
const SignUp = withProviders(SignUpComponent);
const ForgotPassword = withProviders(ForgotPasswordComponent);
const Navbar = withProviders(NavbarComponent);
const Home = withProviders(HomeComponent);
const PostsViewer = withProviders(PostsViewerComponent);

// 4. Registra las versiones finales "envueltas"
ReactOnRails.register({
  Navbar,
  Home,
  PostsViewer,
  SignIn,
  SignUp,
  ForgotPassword,
});

document.addEventListener("turbo:load", () => {
  ReactOnRails.reactOnRailsPageLoaded();
});
