import { useState } from 'react';
import { LikeBlock } from '../components/LikeBlock';

export default function HelloPage() {
  /* REMOVE THIS ↓ */
  const [vote, setVote] = useState(undefined);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const onChange = (vote: 'like' | 'dislike') => {
    // вызвать апи, возвращающий кол-во лайков/дизлайков
    const dataFromServer = {
      vote: ['like', 'dislike'][Math.floor(2 * Math.random())],
      likes: Math.floor(100 * Math.random()),
      dislikes: Math.floor(100 * Math.random()),
    };
    setVote(dataFromServer.vote);
    setLikes(dataFromServer.likes);
    setDislikes(dataFromServer.dislikes);
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
