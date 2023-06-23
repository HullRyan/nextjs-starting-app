export default function PageDisplay({title, body}) {
    return (
        <>
            <div className="flex flex-col items-center justify-between p-12">
                {title}
            </div>
            <div className="flex flex-col items-center justify-between p-16">
                {body}
            </div>
        </>
    );
}