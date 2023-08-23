import Header from "./Header";
import Mcq from "./Mcq";
import styles from './App.css'
import Checkbox from "./Checkbox";
import ShortAnswer from "./ShortAnswer";
import Paragraph from "./Paragraph";
import DropDown from "./DropDown";
import FileUpload from "./FileUpload";
import LinearScale from "./LinearScale";
import MultipleGrid from "./MultipleGrid";
import TickBoxGrid from "./TickBoxGrid";
import Submit from "./Submit";
import Footer from "./Footer";
function App() {
  return (
    <div className="main">
      <Header />
      <Mcq />
      <Checkbox />
      <ShortAnswer />
      <Paragraph />
      <DropDown />
      <FileUpload />
      <LinearScale />
      <MultipleGrid />
      <TickBoxGrid />
      <Submit />
      <Footer />
    </div>
  );
}

export default App;
