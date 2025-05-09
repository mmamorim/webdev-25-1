
export default function Card({ children }) {

    return (
        <>
            <div className="border border-black p-2 rounded w-80">
                { children }
            </div>
        </>
    )
}