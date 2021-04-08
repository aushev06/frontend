import { useState } from 'react';
import { ILikeBlockResult, LikeBlock } from '../components/LikeBlock';
import { ViewsAndComments } from '../components/ViewsAndComments';

export default function HelloPage() {
  const [data, setData] = useState({
    vote: undefined,
    likes: 5,
    dislikes: 2,
  });

  const onChange = (result: ILikeBlockResult) => {
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
        <ViewsAndComments mode={'full'} views={12} comments={3} />
      </div>
    </>
  );
}
