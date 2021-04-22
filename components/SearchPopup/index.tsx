import React, { useState } from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import styles from './SearchPopup.module.scss';

interface SearchPopupProps {
  isActive: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const mockup = {
  autrhor: [
    {
      name: 'Харца Лелович',
    },
    {
      name: 'Нахал Ещетотович',
    },
  ],
  article: [
    {
      name: 'Соха-подкаст на Ingternet',
    },
    {
      name: 'Ха ха ха, говорю я всем, кому не смешно!',
    },
    {
      name: 'Я сижу на кухне, хаваю борщь',
    },
  ],
  tags: [
    {
      type: 'tags',
      name: 'Соха-подкаст на Ingternet',
    },
  ],
  comments: [
    {
      type: 'comments',
      name: 'Соха-подкаст на Ingternet',
    },
  ],
  podcast: [],
};

export const SearchPopup: React.FC<SearchPopupProps> = ({ isActive, onOpen, onClose }) => {
  const [searchData, setSearchData] = useState();
  if (!isActive) return <img onClick={onOpen} className="ml-45" src="/search.svg" alt="Search" />;

  return (
    <div className="position-r">
      <div>
        <img className="ml-45" src="/search.svg" alt="Search" />
        <input></input>
        <img onClick={onClose} className="ml-45" src="/close.svg" alt="close" />
      </div>
      <div className={styles.container}>
        {/* <Accordion>
          <AccordionSummary
            //   expandIcon={<ExpandMoreIcon />}
            aria-label="Expand"
            aria-controls="additional-actions1-content"
            id="additional-actions1-header"
          ></AccordionSummary>
          <AccordionDetails>
            <Typography color="textSecondary">
              The click event of the nested action will propagate up and expand the accordion unless you explicitly stop
              it.
            </Typography>
          </AccordionDetails>
        </Accordion> */}
      </div>
      {/* <Backdrop className={styles.backdrop} open={isActive} onClick={onClose}>
        <CircularProgress color="inherit" />
      </Backdrop> */}
    </div>
  );
};
