import { DelimiterBlock, PostDelimiterBlock } from './Delimiter';
import { HeaderBlock, PostHeaderBlock } from './Header';
import { ImageBlock, PostImageBlock } from './Image';
import { ListBlock, PostListBlock } from './List';
import { ParagraphBlock, PostParagraphBlock } from './Paragraph';
import { Unknown } from './Unknown';

export type Block = PostHeaderBlock | PostParagraphBlock | PostListBlock | PostImageBlock | PostDelimiterBlock;

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
    case 'delimiter':
      return <DelimiterBlock block={block} />;
    default:
      return <Unknown type={block!.type} />;
  }
}
