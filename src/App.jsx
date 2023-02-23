import LoaderSpinier from "component/LoaderSpiner/LoaderSpiner";
import { lazy, Suspense } from "react";
const HomePage = lazy(() => import("./HomePage/HomePage"));
function App() {
  console.log("llldsadlsldf");
  return (
    <Suspense fallback={<LoaderSpinier />}>
      <HomePage />
    </Suspense>
  );
}

export default App;
