import React, {useState} from 'react';

import styles from './SearchPopup.module.scss';
import Item from './Item';
import {getSpecialists} from "../../services/api/SpecialistsApi";
import {Comment, PostData, Theme, User} from "../../interfaces";
import {useSelector} from "react-redux";
import {selectThemesState} from "../../redux/directory/directory.selector";
import {CommentApi} from "../../services/api/CommentApi";
import {getPosts} from "../../services/api/PostApi";

interface SearchPopupProps {
    isSearch: boolean;
    searchInput: string;
    handleClick: () => void

}

const SearchPopup: React.FC<SearchPopupProps> = ({isSearch, searchInput, handleClick}) => {
    const [authors, setAuthors] = useState<User[]>([])
    const [posts, setPosts] = useState<PostData[]>([])
    const [comments, setComments] = useState<Comment[]>([])
    const themes = useSelector(selectThemesState).filter(theme => theme.name.includes(searchInput));

    React.useEffect(() => {
        getSpecialists({name: searchInput}).then(users => {
            setAuthors(users.data)
        })

        CommentApi.get({text: searchInput}).then(response => {
            setComments(response);
        });

        getPosts({title: searchInput}).then(response => {
            setPosts(response.data);
        })


    }, [searchInput])

    return (
        <div className={styles.container}>
            <div className={styles.body}>
                <Item title="Авторы" data={authors.map(user => ({
                    id: user.id,
                    name: user.name,
                    link: `/profile/${user.id}`
                }))}

                      onClose={handleClick}
                />
                <Item title="Публикации" data={posts.map(post => ({
                    id: post.id,
                    name: post.title,
                    link: `/post/${post.slug}`
                }))}
                      onClose={handleClick}
                />
                <Item title="Тэги" data={
                    themes.map(theme => ({
                        id: theme.id,
                        name: theme.name,
                        link: '/themes'
                    }))}

                      onClose={handleClick}
                />
                <Item title="Коментарии" data={comments.map(comment => ({
                    id: comment.id,
                    name: comment.text,
                    link: `/post/${comment.post.slug}`
                }))}
                      onClose={handleClick}
                />
                {/*<Item title="Авторы" data={searchData.podcasts}/>*/}
            </div>
            <div className={styles.footer}>
                <img className="mr-10" src="/arrow-link.svg" alt="Поиск"/>
                <a>Показать все результаты по запросу “{searchInput}”</a>
            </div>
        </div>
    );
};

export default SearchPopup;
