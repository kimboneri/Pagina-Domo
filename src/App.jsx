import AppRouter from "./routes/AppRouter";
import {BdProvider} from "./context/bdProvider";

function App() {
  return (
    <>
    
    <BdProvider>
      <AppRouter />
    </BdProvider>
    </>
  );
}
export default App;
