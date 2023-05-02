import { Header } from "./components/Header";
import { Post, PostType } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import './global.css';

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/56072190?s=400&u=4150bb6561f1ad9e773625395d12bb2658a086d4&v=4",
      name: "Marcelo Tedesco de Miranda",
      role:"Front end developer / UX developer",
    },
    content: [
      {type: 'paragraph', content: 'Fala galera'},
      {type: 'paragraph', content: 'Acabei de subir este projeto no meu portfólio no github. Eh um projeto que fiz na NLW Return, evento da Rocketseat'},
      {type: 'link', content: 'https://github.com/MarceloCG-bot'},
    ],
    publishedAt: new Date('2023-04-30 17:15'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/53702713?v=4",
      name: "Nicole Christine Baptista Bidigaray",
      role:"Back end developer / Data science programmer",
    },
    content: [
      {type: 'paragraph', content: 'Fala galera'},
      {type: 'paragraph', content: 'Acabei de subir este projeto no meu portfólio no github. Eh um projeto que fiz na NLW Return, evento da Rocketseat'},
      {type: 'link', content: 'https://github.com/Nicole-Bidigaray'},
    ],
    publishedAt: new Date('2023-05-05 08:00'),
  },
];

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post  => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            );
          })}
        </main>
      </div>
    </div>
  )
}

export default App
