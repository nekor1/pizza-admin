import loading from "../assets/images/loading.gif"

function Loading () {
    return (
        <div className="loader">
            <img src={loading} alt="loading" />
        </div>
    );
}

export default Loading;