import { Link } from "react-router"

export default function Header() {

    return (
        <>
            <div className="flex items-center gap-1 bg-gray-300 m-1 p-2 rounded">
                <div>
                    App template
                </div>
                <div className="bg-white px-1 rounded">
                    <Link to="/">ir para Hello</Link>
                </div>
                <div className="bg-white px-1 rounded">
                    <Link to="/algo">ir para Algo</Link>
                </div>
            </div>
        </>
    )
}