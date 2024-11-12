import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

function Chocolate(props) {

    const {name ,City} = props;

    return (<>
        <h2>{name} - {City}</h2>
        <hr/>
    </>)
}

root.render(<>
    <h1>All Chocolate</h1>

    <Chocolate name="Madhumita" City="Patur"/>
    <Chocolate name="pooja" City="Washim"/>
    <Chocolate name="Rishi" City="Akot"/>
    
</>)