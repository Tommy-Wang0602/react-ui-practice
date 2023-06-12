import './profile.css'
import Topbar from '../topbar/Topbar'
import Sidebar from '../sidebar/Sidebar'
import Feed from '../feed/Feed'
import Rightbar from '../rightbar/Rightbar'

export default function Profile() {
    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">aaa</div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar />
                    </div>

                </div>
            </div>
        </>
    )
}
