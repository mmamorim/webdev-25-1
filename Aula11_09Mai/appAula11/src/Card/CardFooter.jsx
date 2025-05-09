export default function CardFooter({ children }) {

    return (
        <>
            <hr />
            <div className="p-1 text-sm">
                {children}
            </div>
        </>
    )
}