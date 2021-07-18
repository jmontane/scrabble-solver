import classNames from 'classnames';
import React, { ButtonHTMLAttributes, FunctionComponent, MouseEventHandler } from 'react';

import { noop } from 'lib';

import SvgIcon from '../SvgIcon';
import Tooltip from '../Tooltip';

import Link from './Link';
import styles from './SquareButton.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: BrowserSpriteSymbol;
  title: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const SquareButton: FunctionComponent<Props> = ({
  children,
  className,
  icon,
  onBlur = noop,
  onFocus = noop,
  onMouseOut = noop,
  onMouseOver = noop,
  title,
  ...props
}) => (
  <Tooltip tooltip={title}>
    {({ ariaAttributes, setReferenceElement, onHide, onShow }) => (
      <button
        {...ariaAttributes}
        className={classNames(styles.squareButton, className)}
        ref={setReferenceElement}
        type="button"
        onBlur={(event) => {
          onHide();
          onBlur(event);
        }}
        onFocus={(event) => {
          onShow();
          onFocus(event);
        }}
        onMouseOut={(event) => {
          onHide();
          onMouseOut(event);
        }}
        onMouseOver={(event) => {
          onShow();
          onMouseOver(event);
        }}
        {...props}
      >
        <span className={styles.content}>
          <SvgIcon className={styles.icon} icon={icon} />
        </span>
      </button>
    )}
  </Tooltip>
);

export default Object.assign(SquareButton, {
  Link,
});
