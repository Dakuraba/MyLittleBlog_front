import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Feed} from './component/BlogPost/post.js';

import { LocalizeProvider } from "react-localize-redux";

const postList = [
  { postId: 1, postContent: 'Mock Content 1', postTitle: 'Mock title 1', postDate: '10/10/19'},
  { postId: 2, postContent: 'Mock Content 2', postTitle: 'Mock title 2', postDate: '11/10/19'},
  { postId: 3, postContent: 'Mock Content 3', postTitle: 'Mock title 3', postDate: '12/10/19'}]


ReactDOM.render(
  <LocalizeProvider>
    <Feed posts={postList} />
  </LocalizeProvider>,
  document.getElementById('root')
);