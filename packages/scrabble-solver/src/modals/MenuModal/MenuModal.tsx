import { FunctionComponent, memo } from 'react';

import { Button, Modal } from 'components';
import { LOCALE_FLAGS } from 'i18n';
import { BookHalf, CardChecklist, Cog, Github, Sack } from 'icons';
import { GITHUB_PROJECT_URL } from 'parameters';
import { selectLocale, useTranslate, useTypedSelector } from 'state';

import styles from './MenuModal.module.scss';

interface Props {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
  onShowDictionary: () => void;
  onShowRemainingTiles: () => void;
  onShowSettings: () => void;
  onShowWords: () => void;
}

const MenuModal: FunctionComponent<Props> = ({
  className,
  isOpen,
  onClose,
  onShowDictionary,
  onShowRemainingTiles,
  onShowSettings,
  onShowWords,
}) => {
  const translate = useTranslate();
  const locale = useTypedSelector(selectLocale);
  const Flag = LOCALE_FLAGS[locale];

  return (
    <Modal className={className} isOpen={isOpen} title={translate('menu')} onClose={onClose}>
      <Button
        aria-label={translate('remaining-tiles')}
        className={styles.button}
        Icon={Sack}
        onClick={onShowRemainingTiles}
      >
        {translate('remaining-tiles')}
      </Button>

      <Button aria-label={translate('words')} className={styles.button} Icon={CardChecklist} onClick={onShowWords}>
        {translate('words')}
      </Button>

      <Button aria-label={translate('dictionary')} className={styles.button} Icon={BookHalf} onClick={onShowDictionary}>
        {translate('dictionary')}
      </Button>

      <Button.Link
        aria-label={translate('github')}
        className={styles.button}
        href={GITHUB_PROJECT_URL}
        Icon={Github}
        rel="noopener noreferrer"
        target="_blank"
      >
        {translate('github')}
      </Button.Link>

      <Button aria-label={translate('settings')} className={styles.button} Icon={Cog} onClick={onShowSettings}>
        <div className={styles.settings}>
          <div className={styles.settingsLabel}>{translate('settings')}</div>
          <Flag.Icon className={styles.flag} />
        </div>
      </Button>
    </Modal>
  );
};

export default memo(MenuModal);
