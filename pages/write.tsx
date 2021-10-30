import Link from 'next/link'
import {EditorBlock} from "../components/EditorBlock";
import {getCategories} from "../services/api/CategoryApi";
import {useSelector} from "react-redux";
import {selectUserState} from "../redux/user/user.selector";
import {useRouter} from "next/router";
import {showPost} from "../services/api/PostApi";

const WritePage = ({categories, post}) => {
    const user = useSelector(selectUserState);
    const router = useRouter()

    return (
        <div className={"wrapper"}>
            <div className={'left-side'}>
                <Link href={'/'}>
                    <a>
                        <img src={'/left-arrow.svg'}/>
                    </a>
                </Link>
            </div>

            <div className={'content'} style={{display: 'block'}}>
                <EditorBlock serverSidePost={post} categories={categories}/>
            </div>

            <div className={'right-side'}></div>

        </div>
    )
}

export async function getServerSideProps(ctx) {
    const post = ctx.query?.slug ? await showPost(ctx.query?.slug, ctx.req.cookies?.auth_token) : null;

    return {
        props: {
            categories: await getCategories(),
            post: post ? post.data : null
        },
    }
}

export default WritePage

