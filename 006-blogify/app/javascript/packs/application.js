import "./application.css";

// 0. Lógica para registrar los componentes de React
import ReactOnRails from "react-on-rails";
import withProviders from "../lib/withProviders"; // <-- Nuestro envoltorio

// 1. Importa tus componentes originales
import PostsViewerComponent from "../components/posts/PostsViewer"; // Asegúrate que la ruta sea correcta

// 2. Envuelve cada componente que necesite los providers
const PostsViewer = withProviders(PostsViewerComponent);

// 3. Registra las versiones finales "envueltas"
ReactOnRails.register({
  PostsViewer,
});