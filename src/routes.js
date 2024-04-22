import { Home, Post } from "./views";

export default [
  { path: "/home", exact: true, component: Home },
  { path: "/post/:id", exact: true, component: Post }
];
