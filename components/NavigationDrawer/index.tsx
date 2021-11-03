import { Divider, Drawer, MenuItem } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';
import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Navigation.module.scss';
import {selectUserState} from "../../redux/user/user.selector";
import {SideBlock} from "../SideBlock";
import {MenuList} from "../MenuList";
import {Tags} from "../Tags";
import {Theme} from "../../interfaces";
import {selectCategoriesState, selectThemesState} from "../../redux/directory/directory.selector";

interface NavigationProps {
  menuOpened: boolean;
  onClose: () => void;
}

const meelz = [
  {
    title: 'Chefs',
    link: '/chefs',
  },
  {
    title: 'Delivery Menu',
    link: '/menu',
  },
  {
    title: 'Recipe Boxes',
    link: '/recipes',
  },
  {
    title: 'Chefs Table',
    link: '/chefs-table',
  },
  {
    title: 'Store',
    link: '/chefs-store',
  },
  {
    title: 'Masterclasses',
    link: '/master-classes',
  },
];

const about = [
  {
    title: 'About Us',
    link: '/about',
  },
  {
    title: 'Career',
    link: '/career',
  },
  {
    title: 'FAQs',
    link: '/faq',
  },
  {
    title: 'Contact us',
    link: '/contact_us',
  },
];

export const NavigationDrawer: React.FC<NavigationProps> = ({ menuOpened, onClose }): React.ReactElement => {
  const user = useSelector(selectUserState)['data'];
  const [selectedThemes, setSelectedThemes] = useState<Theme[]>([]);
  const themes = useSelector(selectThemesState);
  const categories = useSelector(selectCategoriesState);
  const dispatch = useDispatch();
  const handleLogout = (): void => {
    if (typeof window !== 'undefined' && window.confirm('Are you sure you want to log out?')) {
      true
    }
  };


  const handleSelectTheme = async (t: Theme) => {
    setSelectedThemes(() => [...selectedThemes, t]);
  }

  return (
    <Drawer elevation={0} anchor="left" classes={{ paper: styles.paper }} open={menuOpened} onClose={onClose}>
      <button className={styles.closeButton} onClick={onClose}>
        <span className={styles.closeIcon} />
      </button>
      <nav className={styles.root}>

        <Link href="/specialists">
          <a className="d-flex mb-3 ml-10">
            <img className="mr-10" src="/users.svg" alt="Специалисты"/>
            Специалисты
          </a>
        </Link>

        <SideBlock name="Категории">
          <MenuList
              items={categories.map(c => ({
                name: c.name,
                url: `/tags/${c.slug}`,
                icon: `/${c.slug}.png`
              }))}
          />
        </SideBlock>
        <SideBlock name="Темы">
          <Tags
              items={themes}
              handleSelect={handleSelectTheme}
              selectedItems={selectedThemes}
          />
        </SideBlock>
        {user && (
          <div className={styles.logout}>
            <Divider />
            <ul>
              <MenuItem className={styles.item} onClick={handleLogout}>
                <span>
                  <Typography variant="body1">Logout</Typography>
                </span>
              </MenuItem>
            </ul>
          </div>
        )}
      </nav>
    </Drawer>
  );
};
