import './post.css'
import { MoreVert } from '@mui/icons-material'
import { Users } from '../../dummyData';
import { useState } from 'react';
export default function Post({ post }) {
    const [like, setlike] = useState(post.like)
    const [isliked, setisliked] = useState(false)

    const likeHandler = () => {
        setlike(isliked ? like - 1 : like + 1)
        setisliked(!isliked)
    }
    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className='postProfileImg' src={Users.filter((u) => u.id === post.userId)[0].profilePicture} alt="" />
                        <span className="postUserName">
                            {Users.filter((u) => u.id === post.userId)[0].username}
                        </span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">
                        {post?.desc}
                    </span>
                    <img className='postImg' src={post.photo} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className='likeIcon' src="assets/like.png" onClick={likeHandler} alt="" />
                        <img className='likeIcon' src="assets/heart.png" onClick={likeHandler} alt="" />
                        <span className="postLikeCounter">{like} people like it</span>
                    </div>
                    <div className="postBottomRight">{post.comment} comments</div>
                </div>
            </div>
        </div>
    )
}
