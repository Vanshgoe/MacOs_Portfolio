import { Navbar, Welcome ,Dock } from "#components";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable"
import { Terminal, Safari, Resume, Trash,Finder, Text, Contact,Home,ImageWindowContent } from "#windows";

gsap.registerPlugin( Draggable);
const App = () => {
  return (
      <main>
          <Navbar />
          <Welcome />
          <Dock />
          <Terminal/>
          <Safari />
          <Resume />
          <Finder />
          <Text />
          <ImageWindowContent />
          <Contact />
          <Home />
          <Trash />
      </main>
  );
};

export default App;