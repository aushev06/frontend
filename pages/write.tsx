import { MainLayout } from '../layouts/MainLayout';

import {EditorJsWrapper} from "../components/Editor/Editor";
import {useState} from "react";
import { savePost } from '../services/api/PostApi';

const WritePage = () => {
  // const user = useSelector((state: State) => state.userReducer.user);

  const [data, setData] = useState<Array<any>>([
    {"type": "header", "data": {"text": "", "level": 2}}
  ]);

  const handleSave = (e: React.MouseEvent<HTMLAnchorElement | MouseEvent>): void => {
    console.log(data);
    savePost({
      title: data[0].data.text as string,
      body: data,
      themes: [{name: '#разработка', id: 0}]
    })
  }

  return (
    <MainLayout title="Написать">
      <div className={"row mt-2"}>
        <div className={"col m9 offset-m1 s12"}>
          <div className={"d-flex justify-content-between align-items-center"}>
            <div className={"display-flex"}>
              <div style={{
                backgroundImage: `url('https://avatars.githubusercontent.com/u/50250729?s=64&v=4')`,
                backgroundSize: 'contain',
                borderRadius: '50%',
                width: 25
              }}/>
              <a href="http://blog-yalta.loc/user/profile/13">&nbsp;Aushev</a>
            </div>
            <div>
              <a onClick={handleSave} href="#" className={"myButton post-create"}>
                Опубликовать &nbsp;
                <i className="material-icons tiny">edit</i>
              </a>
            </div>
          </div>
          <div className={"mt-2"}>
            <EditorJsWrapper config={{
              async onChange(api): Promise<void> {
                const getBlocks = async () => {
                  const blocks = await api.saver.save();
                  setData(blocks.blocks)
                }
                await getBlocks();
              }
            }}/>
          </div>
        </div>
      </div>

    </MainLayout>
  )
}
export default WritePage

