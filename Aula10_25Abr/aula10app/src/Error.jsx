import { Link } from "react-router"
import Header from "./Header"

export default function Error() {

    return (
        <>
            <Header />
            <div>
                Error COMPONENT
                <Link to="/">ir para Hello</Link>
                <Link to="/algo">ir para ALGO</Link>
            </div>
        </>
    )
}