import React, { useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Collapse from '@material-ui/core/Collapse';
import styles from './SearchPopup.module.scss';
import { Divider } from '@material-ui/core';
import Link from 'next/link'
import {useRouter} from "next/router";

interface ItemProps {
  title: string;
  data: Array<{
      name: string;
      link: string;
      id: number | string;
  }>;
  onClose: () => void
}

const Item: React.FC<ItemProps> = (p) => {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  useEffect(() => {
    if (p.title === 'Авторы' || p.title === 'Публикации') {
      setOpen(true);
    }
  }, []);

  const handleClick = () => {
    setOpen(!open);
  };

  if (p.title === 'Авторы' && p.data.length > 0) {
    return (
      <>
        <div onClick={handleClick} className={styles.searchTitleInner}>
          <div className={styles.searchTitle}>
            {p.title} ({p.data.length})
          </div>
          {p.data.length > 3 && (
            <a className={styles.showAll} onClick={(e) => e.stopPropagation()}>
              Показать все
            </a>
          )}
        </div>
        <Divider classes={{ root: styles.divider }} />
        <Collapse in={open} timeout="auto">
          <div className={styles.searchItems}>
            {p.data.slice(0, 3).map((el, key) => (
              <div onClick={ async () => {
                  await router.push(el.link)
                  p.onClose()
              }} key={`${p.title}-${key}`} className={styles.searchItem}>
                <Avatar className="mr-10" />
                <div>{el.name}</div>
              </div>
            ))}
          </div>
        </Collapse>
      </>
    );
  }

  if (p.title !== 'Авторы' && p.data.length > 0) {
    return (
      <>
        <div onClick={handleClick} className={styles.searchTitleInner}>
          <div className={styles.searchTitle}>
            {p.title} ({p.data.length})
          </div>
          {p.data.length > 3 && (
            <a className={styles.showAll} onClick={(e) => e.stopPropagation()}>
              Показать все
            </a>
          )}
        </div>
        <Divider classes={{ root: styles.divider }} />
        <Collapse in={open} timeout="auto" disableStrictModeCompat>
          <div className={styles.searchItems}>
            {p.data.slice(0, 3).map((el, key) => (
              <div key={`${p.title}-${key}`} className={styles.searchItem}>
                <Link href={el.link}>
                    <a onClick={() => p.onClose()}>{el.name}</a>
                </Link>
              </div>
            ))}
          </div>
        </Collapse>
      </>
    );
  }

  return null;
};

export default Item;
