import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

import styles from "./Post.module.css";

export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://avatars.githubusercontent.com/u/56072190?v=4" alt="" />
                    <div className={styles.authorInfo}>
                        <strong>Marcelo Tedesco de Miranda</strong>
                        <span>Front end Developer / UX Developer</span>
                    </div>
                </div>

                <time title="27 de abril às 12:45" dateTime="2023-04-27 12:45:25">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galera</p>
                <p>Acabei de subir este projeto no meu portfólio no github. É um projeto que fiz na NLW Return, evento da Rocketseat</p>
                <p><a href="#"> https://github.com/MarceloCG-bot</a></p>
                <p>
                    <a href="#">#novoprojeto</a>{' '}
                    <a href="#">#nlw</a>{' '}
                    <a href="#">#rocketseat</a>{' '}
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe o seu feedback</strong>

                <textarea 
                    placeholder="Deixe um comentário"
                />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    );
}