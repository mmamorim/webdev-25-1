export default function CardTitle({ children }) {

    return (
        <>
            <div className="p-1 font-bold">
                { children }
            </div>
            <hr />
        </>
    )
}