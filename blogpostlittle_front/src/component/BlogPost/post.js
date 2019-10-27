import React from 'react';

class Post extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>{this.props.postItem.postTitle}</h1>
                <p>{this.props.postItem.postDate}</p>
                <p>{this.props.postItem.postContent}</p>
            </div>
        );
    }
}

export class Feed extends React.Component {
    

    render() {
        const postslist = this.props.posts;

        return (
            <ul>
                {postslist.map((post) =>
                    <Post key={post.postId.toString()} postItem={post} />
                )}
            </ul>
        );
    }
}