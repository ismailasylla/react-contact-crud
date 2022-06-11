import "./App.css";
import Contact from "./components/Contact";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div className="App container mt-5">
      <h1>Contact App</h1>
      <Contact />
      <ContactForm />
    </div>
  );
}

export default App;
