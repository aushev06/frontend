import { HeaderBlock, PostHeaderBlock } from './Header';
import { ImageBlock, PostImageBlock } from './Image';
import { ListBlock, PostListBlock } from './List';
import { ParagraphBlock, PostParagraphBlock } from './Paragraph';

export type Block = PostHeaderBlock | PostParagraphBlock | PostListBlock | PostImageBlock;

export default function getBlockHTML(block: Block): JSX.Element {
  switch (block.type) {
    case 'header':
      return <HeaderBlock block={block} />;
    case 'paragraph':
      return <ParagraphBlock block={block} />;
    case 'list':
      return <ListBlock block={block} />;
    case 'image':
      return <ImageBlock block={block} />;
    default:
      return <div></div>;
  }
}
