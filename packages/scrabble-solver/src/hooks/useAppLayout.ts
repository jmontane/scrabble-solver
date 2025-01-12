/* eslint-disable max-statements */

import {
  BOARD_TILE_SIZE_MAX,
  BOARD_TILE_SIZE_MIN,
  BORDER_WIDTH,
  BUTTON_HEIGHT,
  COMPONENTS_SPACING,
  COMPONENTS_SPACING_SMALL,
  DICTIONARY_HEIGHT,
  DICTIONARY_HEIGHT_MOBILE,
  LOGO_ASPECT_RATIO,
  LOGO_HEIGHT,
  LOGO_HEIGHT_SMALL,
  MODAL_HEADER_HEIGHT,
  MODAL_WIDTH,
  NAV_PADDING,
  RACK_TILE_SIZE_MAX,
  SOLVER_COLUMN_WIDTH,
} from 'parameters';
import { selectConfig, useTypedSelector } from 'state';

import useIsTouchDevice from './useIsTouchDevice';
import useMediaQueries from './useMediaQueries';
import useViewportSize from './useViewportSize';

const useAppLayout = () => {
  const { viewportHeight, viewportWidth } = useViewportSize();
  const config = useTypedSelector(selectConfig);
  const isTouchDevice = useIsTouchDevice();
  const { isLessThanXs, isLessThanS, isLessThanM, isLessThanL, isLessThanXl } = useMediaQueries();
  const isBoardFullWidth = isLessThanM;
  const showResultCandidatePicker = isLessThanL;
  const componentsSpacing = isLessThanXl ? COMPONENTS_SPACING_SMALL : COMPONENTS_SPACING;
  const showColumn = !isLessThanL;
  const columnWidth = showColumn ? SOLVER_COLUMN_WIDTH : 0;
  const logoHeight = isLessThanL ? LOGO_HEIGHT_SMALL : LOGO_HEIGHT;
  const navHeight = 2 * NAV_PADDING + logoHeight;
  const solverHeight = viewportHeight - navHeight;
  const solverWidth = viewportWidth;
  const maxBoardWidth = solverWidth - columnWidth - (showColumn ? componentsSpacing : 0) - 2 * componentsSpacing;
  const tileSize = Math.min((maxBoardWidth - 2 * BORDER_WIDTH) / config.maximumCharactersCount, RACK_TILE_SIZE_MAX);
  const candidatePickerHeight = showResultCandidatePicker ? BUTTON_HEIGHT + componentsSpacing : 0;
  const bottomContainerHeight = candidatePickerHeight + tileSize + 2 * componentsSpacing;
  const maxBoardHeight = isBoardFullWidth
    ? Number.POSITIVE_INFINITY
    : Math.max(solverHeight - bottomContainerHeight, 0);
  const cellWidth = (maxBoardWidth - (config.boardWidth + 1) * BORDER_WIDTH) / config.boardWidth;
  const cellHeight = (maxBoardHeight - (config.boardHeight + 1) * BORDER_WIDTH) / config.boardHeight;
  const cellSize = Math.min(Math.max(Math.min(cellWidth, cellHeight), BOARD_TILE_SIZE_MIN), BOARD_TILE_SIZE_MAX);
  const boardSize = (cellSize + BORDER_WIDTH) * config.boardWidth + BORDER_WIDTH;
  const maxControlsWidth = tileSize * config.maximumCharactersCount + 2 * BORDER_WIDTH;
  const showResultsInModal = isLessThanL;
  const dictionaryHeight = showResultsInModal ? DICTIONARY_HEIGHT_MOBILE : DICTIONARY_HEIGHT;
  const modalWidth = isLessThanS ? viewportWidth : MODAL_WIDTH;
  const resultsHeight = isLessThanL
    ? viewportHeight - dictionaryHeight - BUTTON_HEIGHT - MODAL_HEADER_HEIGHT - 5 * componentsSpacing
    : boardSize - componentsSpacing - dictionaryHeight;

  return {
    actionsWidth: 2 * BUTTON_HEIGHT - BORDER_WIDTH,
    animateTile: !isLessThanXs,
    boardSize,
    cellSize,
    dictionaryHeight,
    isModalFullWidth: isLessThanS,
    logoHeight,
    logoWidth: logoHeight * LOGO_ASPECT_RATIO,
    maxControlsWidth,
    resultsHeight,
    resultsWidth: isLessThanL ? modalWidth - 2 * componentsSpacing : SOLVER_COLUMN_WIDTH,
    showCompactControls: !showColumn,
    showFloatingSolveButton: isTouchDevice,
    showKeyMap: !isTouchDevice,
    showResultsInModal,
    showShortNav: isLessThanS,
    showTilePoints: !isLessThanXs,
    tileSize,
  };
};

export default useAppLayout;
