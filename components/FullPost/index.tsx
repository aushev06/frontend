import React from 'react';
import styles from './Post.module.scss';
import { Popover } from '@material-ui/core';
import { ShareIcon } from '../icons/ShareIcon';
import { FacebookIcon } from '../icons/FacebookIcon';
import { VkIcon } from '../icons/VkIcon';
import { TwitterIcon } from '../icons/TwitterIcon';
import { TelegramIcon } from '../icons/TelegramIcon';
import { WhatsappIcon } from '../icons/WhatsappIcon';
import { LikeBlock } from '../LikeBlock';
import { UserViewOnContent } from '../UserViewOnContent';
import { ViewsAndComments } from '../ViewsAndComments';
import { LikeBlockResult } from '../LikeBlock';
import getBlockHTML, { Block } from './PostViewer';
import { WarningIcon } from '../icons/WarningIcon';
import {PostData} from "../../interfaces";
import {useAllMQ} from "../../utils/useAllMQ";

export const FullPost: React.FC<{post: PostData, onSetLike: (postId: number, like: unknown) => void}> = ({post, onSetLike}) => {
  const mq = useAllMQ();
  const [postData, setPostData] = React.useState(post);
  const [anchorEl, setAnchorEl] = React.useState<HTMLDivElement | null>(null);
  console.log(postData)
  const [likesAndDislikes, setLikesAndDislikes] = React.useState<LikeBlockResult>({
    likes: postData.likes_count,
    dislikes: postData.dislikes_count,
    vote: post?.liked_type,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSetLike =async (like: LikeBlockResult) => {
    setLikesAndDislikes(like);
    await onSetLike(post.id, like?.vote)
  }

  return (
    <div className={styles.post}>
      <UserViewOnContent
        user={{
          id: post.user.id,
          name: post.user.name,
          avatarUrl: post.user.avatar,
        }}
        time={new Date(post.created_at).getTime()}
      />
      <div className={styles.postInfo}>
        <div className={styles.postDetails}>
          <h1 className={styles.postHeader}>{post.title}</h1>
          <ViewsAndComments comments={post.comments_count} views={post.views} mode="full" />
        </div>
        {!mq.isXS && (
            <div className={styles.postActions}>
              <LikeBlock
                  likes={likesAndDislikes.likes}
                  dislikes={likesAndDislikes.dislikes}
                  mode="mini"
                  onChange={handleSetLike}
                  vote={likesAndDislikes.vote}
              />
              <div className={styles.postShare} onClick={handleClick}>
                <ShareIcon className={styles.postShareIcon} />
                Поделиться
              </div>
              <Popover
                  open={!!anchorEl}
                  anchorEl={anchorEl}
                  onClose={() => setAnchorEl(null)}
                  classes={{
                    paper: styles.postSharePopup,
                  }}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                  }}
              >
                <div className={styles.postShareSocial}>
                  <FacebookIcon className={styles.postShareSocialIcon} />
                  Facebook
                </div>
                <div className={styles.postShareSocial}>
                  <VkIcon className={styles.postShareSocialIcon} />
                  Вконтакте
                </div>
                <div className={styles.postShareSocial}>
                  <TwitterIcon className={styles.postShareSocialIcon} />
                  Twitter
                </div>
                <div className={styles.postShareSocial}>
                  <TelegramIcon className={styles.postShareSocialIcon} />
                  Telegram
                </div>
                <div className={styles.postShareSocial}>
                  <WhatsappIcon className={styles.postShareSocialIcon} />
                  Whatsapp
                </div>
              </Popover>
            </div>
        )}
      </div>
      {postData.body.map((block: Block, idx) => (<div key={'block-' + idx}>
        {getBlockHTML(block)}
      </div>))}
      <div className={styles.postFooter}>
        <div className={styles.postFooterIcons}>
          <FacebookIcon className={styles.postFooterIcon} hoverClassName={styles.postFooterIconHover} />
          <VkIcon className={styles.postFooterIcon} hoverClassName={styles.postFooterIconHover} />
          <TwitterIcon className={styles.postFooterIcon} hoverClassName={styles.postFooterIconHover} />
          <TelegramIcon className={styles.postFooterIcon} hoverClassName={styles.postFooterIconHover} />
          <WhatsappIcon className={styles.postFooterIcon} hoverClassName={styles.postFooterIconHover} />
        </div>
        <span className={styles.postFooterComplain}>
          <WarningIcon className={styles.postFooterComplainIcon} />
          Пожаловаться
        </span>
      </div>
    </div>
  );
};
