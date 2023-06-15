import './rightbar.css'
import { Users } from '../../dummyData'
import Online from '../online/Online'
export default function Rightbar({ profile }) {
    const HomeRightbar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img className='birthdayImg' src="assets/gift.png" alt="" />
                    <span className="birthdayText">
                        <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today
                    </span>
                </div>
                <img src="assets/ad.png" alt="" className="rightbarAd" />
                <h4 className="rightbarTitle"> online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map((u) => (<Online key={u.id} user={u} />
                    ))}
                </ul>
            </>
        );
    };
    const ProfileRightbar = () => {
        return (
            <>
                <h4 className="rightbarTitle">User Infomation</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightabrInfoKey">City:</span>
                        <span className="rightabrInfoValue">New York</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightabrInfoKey">From:</span>
                        <span className="rightabrInfoValue">Madrid</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightabrInfoKey">RelationShip:</span>
                        <span className="rightabrInfoValue">Single</span>
                    </div>
                </div>
                <h4 className="rightbarTitle">User friends</h4>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/2.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/5.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/6.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                </div>
            </>

        )
    }
    return (
        <div className='rightbar'>
            <div className="rightbarWrapper">
                {profile ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    );
}
