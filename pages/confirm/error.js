/*
    Make a e beautiful react component to inform the user that something went wrong
*/

export default function Error() {
    return (
        <div className="error">
            <h1>Something went wrong</h1>
            <p>
                We are sorry, but something went wrong while trying to process your
                request.
            </p>
            <p>
                Please try again later. If the problem persists, please contact us.
            </p>
        </div>
    );
}