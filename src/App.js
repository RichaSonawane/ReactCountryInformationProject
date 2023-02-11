import "./App.css";
import Header from "./Components/Header";
import MainDisplay from "./Components/MainDisplay";
import OptionDisplay from "./Components/OptionDisplay";
import { useSelector } from "react-redux";
import { selectDisplay } from "./redux/slices/displayCountrySlice";
import LoadingModal from "./Components/LoadingModal";
import { selectLoading } from "./redux/slices/loadingSlice";




function App() {
//console.log(potentials);
let currentDisplay =useSelector(selectDisplay);
//console.log("DISPLAY", currentDisplay)
let isLoading = useSelector(selectLoading)

    return (
        <div className="App font-link">
            {isLoading && <LoadingModal/>}
            <Header />
            {currentDisplay ? <MainDisplay/> : <OptionDisplay/>}
        </div>
    );
}

export default App;
