import React from 'react';
import { PostForm } from "./postform.js"


class Post extends React.Component {

    render() {
        return (
            
            <div>
                <h1>{this.props.postItem.postTitle}</h1>
                <p>{this.props.postItem.postId}</p>
                <ActionBar/>
                <p>{this.props.postItem.postDate}</p>
                <p>{this.props.postItem.postContent}</p>
            </div>
        );
    }
}

class ActionBar extends React.Component {

    render() {
        return (
            <div>
                <button>Reply</button>
                <button>Modify</button>
                <button>Delete</button>
            </div>
        )
    }
}


export class Feed extends React.Component {
    
    state = {
        posts:[]
    }

    componentDidMount() {
        fetch("https://localhost:44367/api/blogpost/v1")
        .then(res => res.json())
        .then((data) => {
          this.setState({ posts: data })
        })
        .catch(console.log)

    }

    render() {
        const postslist = this.state.posts;

        return (
            <div>
                <div>
                    <PostForm />
                </div>
                <ul> 
                    {postslist.map((post) =>
                        <Post key={post.postId.toString()} postItem={post} />
                    )}
                </ul>
            </div>
        );
    }
}