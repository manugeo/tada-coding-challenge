export default {
  posts: [
    {
      id: 1,
      title: "JS Rocks!",
      text: "JavaScript is really cool. I enjoy writing it! It's so powerful!",
      author: "Jasmine",
      authorId: 1
    }
  ],
  comments: [
    { id: 1, text: "JS does rock!", postId: 1, author: "Emiliano" },
    { id: 2, text: "JS sucks!", postId: 1, author: null }
  ]
};
