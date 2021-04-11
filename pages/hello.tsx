import { useState } from 'react';
import { LikeBlockResult, LikeBlock } from '../components/LikeBlock';
import { ViewsAndComments } from '../components/ViewsAndComments';

export default function HelloPage() {
  const [data, setData] = useState({
    vote: undefined,
    likes: 5,
    dislikes: 2,
  });

  const onChange = (result: LikeBlockResult) => {
    setData(result);
  };

  const { vote, likes, dislikes } = data;
  return (
    <>
      <div className={'p-30'}>
        <LikeBlock mode={'full'} likes={likes} dislikes={dislikes} vote={vote} onChange={onChange} />
      </div>
      <div className={'p-30'}>
        <LikeBlock mode={'mini'} likes={likes} dislikes={dislikes} vote={vote} onChange={onChange} />
      </div>
      <div className={'p-30'}>
        <ViewsAndComments mode={'full'} views={1} comments={1} />
        <ViewsAndComments mode={'full'} views={2} comments={3} />
        <ViewsAndComments mode={'full'} views={5} comments={5} />
        <ViewsAndComments mode={'full'} views={11} comments={11} />
        <ViewsAndComments mode={'full'} views={12} comments={13} />
        <ViewsAndComments mode={'full'} views={15} comments={15} />
        <ViewsAndComments mode={'full'} views={21} comments={21} />
        <ViewsAndComments mode={'full'} views={22} comments={23} />
        <ViewsAndComments mode={'full'} views={25} comments={25} />
      </div>
      <div className={'p-30'}>
        <ViewsAndComments mode={'mini'} views={12} comments={3} />
      </div>
    </>
  );
}
