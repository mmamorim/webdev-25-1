import { Link } from "react-router"
import Header from "./Header"

export default function Algo() {

    return(
        <>
            <Header />
            <div>
                Algo COMPONENT
                <Link to="/">ir para Hello</Link>
            </div>
        </>
    )
}