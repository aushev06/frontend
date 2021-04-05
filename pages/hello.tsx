import { useState } from 'react';
import { LikeBlock } from '../components/LikeBlock';
import { ILikeBlockResult } from '../components/LikeBlock/LikeBlock';

export default function HelloPage() {
  const [vote, setVote] = useState(undefined);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const onChange = (result: ILikeBlockResult) => {
    setVote(result.vote);
    setLikes(likes + result.likes);
    setDislikes(dislikes + result.dislikes);
  };

  return (
    <>
      <div className={'p-30'}>
        <LikeBlock mode={'full'} likes={likes} dislikes={dislikes} vote={vote} onChange={onChange} />
      </div>
      <div className={'p-30'}>
        <LikeBlock mode={'mini'} likes={likes} dislikes={dislikes} vote={vote} onChange={onChange} />
      </div>
    </>
  );
}
