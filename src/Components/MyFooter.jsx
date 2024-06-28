import './MyFooter.css'
function MyFooter() {
    return (
        <div className="fixed-bottom br-20 bg-dark bg-gradient bord mx-auto my-auto d-flex justify-content-center">
            <ul className="list-unstyled text-white d-flex align-items-center">
                <li><i className="fa-solid fa-reply p-3"></i></li>
                <li><i className="fa-solid fa-arrow-left p-3"></i></li>
                <li><i className="fa-solid fa-play p-3"></i></li>
                <li><i className="fa-solid fa-arrow-right p-3"></i></li>
                <li><i className="fa-solid fa-share-nodes p-3"></i></li>
            </ul>
        </div>
    )
}

export default MyFooter