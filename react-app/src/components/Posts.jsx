import Post from "./Post";

const Posts = ({ posts,delPost}) => {
    return(
       <>
            <h2>Posts</h2>
        <div className="posts">
          {
            posts.map(post => <Post key={ post.id } data={ post } delPost={ delPost }/>)
          }
          
        </div>
      </>
    )
}

export default Posts;