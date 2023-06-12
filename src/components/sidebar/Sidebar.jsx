import './sidebar.css'
import {
    RssFeed, Chat,
    PlayCircleFilledOutlined,
    Group,
    Bookmark,
    HelpOutline,
    WorkOutline,
    Event,
    School,
} from '@mui/icons-material'
import { Users } from '../../dummyData'
import CloseFriend from '../closeFriend/CloseFriend'
export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className='sidebarIcon' />
                        <span className="sidebarListIconText">
                            Feed
                        </span>
                    </li>
                    <li className="sidebarListItem">
                        <Chat className='sidebarIcon' />
                        <span className="sidebarListIconText">
                            Chats
                        </span>
                    </li>
                    <li className="sidebarListItem">
                        <PlayCircleFilledOutlined className='sidebarIcon' />
                        <span className="sidebarListIconText">
                            Videos
                        </span>
                    </li>
                    <li className="sidebarListItem">
                        <Group className='sidebarIcon' />
                        <span className="sidebarListIconText">
                            Groups
                        </span>
                    </li>
                    <li className="sidebarListItem">
                        <Bookmark className='sidebarIcon' />
                        <span className="sidebarListIconText">
                            Bookmarks
                        </span>
                    </li>
                    <li className="sidebarListItem">
                        <HelpOutline className='sidebarIcon' />
                        <span className="sidebarListIconText">
                            Questions
                        </span>
                    </li>
                    <li className="sidebarListItem">
                        <WorkOutline className='sidebarIcon' />
                        <span className="sidebarListIconText">
                            Jobs
                        </span>
                    </li>
                    <li className="sidebarListItem">
                        <Event className='sidebarIcon' />
                        <span className="sidebarListIconText">
                            Events
                        </span>
                    </li>
                    <li className="sidebarListItem">
                        <School className='sidebarIcon' />
                        <span className="sidebarListIconText">
                            Courses
                        </span>
                    </li>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className='sidebarHr' />
                <ul className="sidebarFriendList">
                    {Users.map((u) => < CloseFriend key={u.id} user={u} />)}
                </ul>
            </div>
        </div>
    )
}
