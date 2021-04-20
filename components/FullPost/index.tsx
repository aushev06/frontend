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

interface PostData {
  likesCount: number;
  dislikesCount: number;
  content: {
    time: number;
    blocks: Block[];
    version: string;
  };
}

const _postData: PostData = {
  likesCount: 52,
  dislikesCount: 12,
  content: {
    time: 1556098174501,
    blocks: [
      {
        type: 'header',
        data: {
          text: 'Editor.js',
          level: 2,
        },
      },
      {
        type: 'paragraph',
        data: {
          text: 'Hey. Meet the new Editor. On this page you can see it in action — try to edit this text.',
        },
      },
      {
        type: 'header',
        data: {
          text: 'Key features',
          level: 3,
        },
      },
      {
        type: 'list',
        data: {
          style: 'unordered',
          items: [
            'It is a block-styled editor',
            'It returns clean data output in JSON',
            'Designed to be extendable and pluggable with a simple API',
          ],
        },
      },
      {
        type: 'header',
        data: {
          text: 'What does it mean «block-styled editor»',
          level: 3,
        },
      },
      {
        type: 'paragraph',
        data: {
          text:
            'Workspace in classic editors is made of a single contenteditable element, used to create different HTML markups. Editor.js <mark class="cdx-marker">workspace consists of separate Blocks: paragraphs, headings, images, lists, quotes, etc</mark>. Each of them is an independent contenteditable element (or more complex structure) provided by Plugin and united by Editor\'s Core.',
        },
      },
      {
        type: 'paragraph',
        data: {
          text:
            'There are dozens of <a href="https://github.com/editor-js">ready-to-use Blocks</a> and the <a href="https://editorjs.io/creating-a-block-tool">simple API</a> for creation any Block you need. For example, you can implement Blocks for Tweets, Instagram posts, surveys and polls, CTA-buttons and even games.',
        },
      },
      {
        type: 'header',
        data: {
          text: 'What does it mean clean data output',
          level: 3,
        },
      },
      {
        type: 'paragraph',
        data: {
          text:
            'Classic WYSIWYG-editors produce raw HTML-markup with both content data and content appearance. On the contrary, Editor.js outputs JSON object with data of each Block. You can see an example below',
        },
      },
      {
        type: 'paragraph',
        data: {
          text:
            'Given data can be used as you want: render with HTML for <code class="inline-code">Web clients</code>, render natively for <code class="inline-code">mobile apps</code>, create markup for <code class="inline-code">Facebook Instant Articles</code> or <code class="inline-code">Google AMP</code>, generate an <code class="inline-code">audio version</code> and so on.',
        },
      },
      {
        type: 'paragraph',
        data: {
          text: 'Clean data is useful to sanitize, validate and process on the backend.',
        },
      },
      {
        type: 'delimiter',
        data: {},
      },
      {
        type: 'paragraph',
        data: {
          text:
            "We have been working on this project more than three years. Several large media projects help us to test and debug the Editor, to make it's core more stable. At the same time we significantly improved the API. Now, it can be used to create any plugin for any task. Hope you enjoy. 😏",
        },
      },
      {
        type: 'image',
        data: {
          file: {
            url:
              'https://st.depositphotos.com/1760224/3660/i/600/depositphotos_36606389-stock-photo-sport-success-on-sunset-background.jpg',
          },
          caption: '',
          withBorder: true,
          stretched: false,
          withBackground: false,
        },
      },
    ],
    version: '2.12.4',
  },
};

export const FullPost: React.FC = () => {
  const [postData, setPostData] = React.useState(_postData);
  const [anchorEl, setAnchorEl] = React.useState<HTMLDivElement | null>(null);
  const [likesAndDislikes, setLikesAndDislikes] = React.useState<LikeBlockResult>({
    likes: postData.likesCount,
    dislikes: postData.dislikesCount,
    vote: undefined,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div className={styles.post}>
      <UserViewOnContent
        user={{
          id: 0,
          name: 'Dr. Who',
          avatarUrl: 'https://clck.ru/UDyci',
        }}
        time={1618128849922}
      />
      <div className={styles.post_info}>
        <div className={styles.post_details}>
          <h1 className={styles.post_header}>В Магасе прошел Meetup по программированию и безопасности</h1>
          <ViewsAndComments comments={21} views={234} mode="full" />
        </div>
        <div className={styles.post_actions}>
          <LikeBlock
            likes={likesAndDislikes.likes}
            dislikes={likesAndDislikes.dislikes}
            mode="mini"
            onChange={setLikesAndDislikes}
            vote={likesAndDislikes.vote}
          />
          <div className={styles.post_share} onClick={handleClick}>
            <ShareIcon className={styles.post_share_icon} />
            Поделиться
          </div>
          <Popover
            open={!!anchorEl}
            anchorEl={anchorEl}
            onClose={() => setAnchorEl(null)}
            classes={{
              paper: styles.post_share_popup,
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
            <div className={styles.post_share_social}>
              <FacebookIcon className={styles.post_share_social_icon} />
              Facebook
            </div>
            <div className={styles.post_share_social}>
              <VkIcon className={styles.post_share_social_icon} />
              Вконтакте
            </div>
            <div className={styles.post_share_social}>
              <TwitterIcon className={styles.post_share_social_icon} />
              Twitter
            </div>
            <div className={styles.post_share_social}>
              <TelegramIcon className={styles.post_share_social_icon} />
              Telegram
            </div>
            <div className={styles.post_share_social}>
              <WhatsappIcon className={styles.post_share_social_icon} />
              Whatsapp
            </div>
          </Popover>
        </div>
      </div>
      {postData.content.blocks.map((block: Block) => getBlockHTML(block))}
      <div className={styles.post_footer}>
        <div className={styles.post_footer_icons}>
          <FacebookIcon className={styles.post_footer_icon} hoverClassName={styles.post_footer_icon_hover} />
          <VkIcon className={styles.post_footer_icon} hoverClassName={styles.post_footer_icon_hover} />
          <TwitterIcon className={styles.post_footer_icon} hoverClassName={styles.post_footer_icon_hover} />
          <TelegramIcon className={styles.post_footer_icon} hoverClassName={styles.post_footer_icon_hover} />
          <WhatsappIcon className={styles.post_footer_icon} hoverClassName={styles.post_footer_icon_hover} />
        </div>
        <span className={styles.post_footer_complain}>
          <WarningIcon className={styles.post_footer_complain_icon} />
          Пожаловаться
        </span>
      </div>
    </div>
  );
};
