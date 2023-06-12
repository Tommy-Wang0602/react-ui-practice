import './online.css'

export default function Online({ user }) {
    return (
        <li className="rightbarFriend">
            <div className="rightbarPorfileImgContainer">
                <img className='rightbarProfileImg' src={user.profilePicture} alt="" />
                <span className="rightbarOnline"></span>
            </div>
            <span className="righbarUserName">{user.username}</span>
        </li>
    )
}
