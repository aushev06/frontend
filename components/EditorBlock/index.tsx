import {Typography} from "@material-ui/core";
import styles from './EditorBlock.module.scss'
import {EditorJsWrapper} from "../Editor/Editor";
import {useEffect, useState} from "react";
import {savePost} from "../../services/api/PostApi";
import {Button} from "../Button";
import {useRouter} from 'next/router';
import {Category, PostData} from "../../interfaces";
import {SelectCategory} from "../SelectCategory";

type Props = {
    categories: Category[],
    serverSidePost?: PostData
}

export function EditorBlock({ categories, serverSidePost }: Props) {
    const router = useRouter();
    const [data, setData] = useState<Array<any>>(serverSidePost ? serverSidePost.body : [
        {"type": "header", "data": {"text": "", "level": 2}}
    ]);

    const [post, setPost] = useState<PostData>(serverSidePost || null);
    const [category, setCategory] = useState<Category>(serverSidePost?.category || categories[0]);

    const [message, setMessage] = useState('');

    const handleSave = async (status: string) => {
        setMessage('Сохранение...')
       try {
           const response =  await savePost({
               title: data[0].data.text as string,
               body: data,
               themes: [{name: '#разработка', id: 0}],
               status,
               category,
               id: post?.id
           });

           setPost(response.data);
           setMessage('Сохранено в черновик...')
       } catch (e) {
           setMessage('Произошла ошибка')
       }

    }

    const onSelectCategory = (cat: Category) => {
        setCategory(cat);
    }

    return (
        <div>
            <div className={styles.header}>
                <div>
                    {message.length > 0 && <Typography className={styles.header_draftText}>{message}</Typography>}
                </div>

                <div className={styles.buttons}>
                    <Button disabled={post === null} onClick={() => router.push(`/post/${post.slug}`)} variant={'outlined'} className={styles.eyes}>
                        <img src={'/eyes.svg'}/>
                    </Button>

                    <Button onClick={() => handleSave('draft')} variant={'outlined'} className={styles.saveDraftBtn}>
                        Сохранить
                    </Button>

                    <Button onClick={() => handleSave('active')} variant={'outlined'} className={styles.save}>
                        Опубликовать
                    </Button>
                </div>
            </div>

           <SelectCategory onSelect={onSelectCategory} selectedCategory={category} categories={categories} />

            <EditorJsWrapper
                blocks={data}
                config={{
                async onChange(api): Promise<void> {
                    const getBlocks = async () => {
                        const blocks = await api.saver.save();
                        setData(blocks.blocks)
                    }
                    await getBlocks();
                }
            }}/>
        </div>
    )
}
