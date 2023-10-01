 import React, { useState } from 'react';
import './App.css';
import PostSelector from './PostSelector';
import QuestionForm from './Question';
import ArticleForm from './ArticleForm';
import FindQuestion from './SearchQuestion';
import "firebase/firestore";
function App() {
  const [postType, setPostType] = useState('question');

  return (
    <div className="App">
      <h1>New Post</h1>
      <PostSelector postType={postType} setPostType={setPostType} />
      {postType === 'question' ? <QuestionForm /> : null}
      {postType === 'article' ? <ArticleForm /> : null}
      <div className="Find"> 
      {postType === 'FindQuestion' ? <FindQuestion /> : null} 
      </div>
     
    </div>
  );
}

export default App;
