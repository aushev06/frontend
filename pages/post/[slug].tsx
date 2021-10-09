import {useRouter} from 'next/router'
import {getPostComments, showPost} from "../../services/api/PostApi";
import {Comment, PostData} from "../../interfaces";
import {MainLayout} from "../../layouts/MainLayout";

type Props = {
    post: PostData;
    comments: Comment[]
}

function PostPage({ post, comments }: Props) {
    const router = useRouter()
    const {slug} = router.query

    return (
        <MainLayout title="Написать">
            <div className={'wrapper'}>
                <div className={'content'}>
                    <div dangerouslySetInnerHTML={{__html: post.html}}></div>


                    <div className={'comments'}>
                        {comments.map((item, idx) => {
                            return (
                                <div key={idx}>
                                    ${item.text}
                                </div>
                            )
                        })}
                    </div>

                </div>
            </div>
        </MainLayout>
    );
}

export async function getServerSideProps(ctx) {
    const response = await showPost(ctx.query.slug);
    const responseComments = await getPostComments(response.data.id);
    return {
        props: {
            post: response.data,
            comments: responseComments
        },
    }
}

export default PostPage;
