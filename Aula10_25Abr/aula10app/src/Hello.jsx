import { Link } from "react-router"
import Header from "./Header"

export default function Hello() {

    return(
        <>
            <Header />
            <div>
                HELLO COMPONENT
                <Link to="/algo">ir para Algo</Link>
            </div>
        </>
    )
}