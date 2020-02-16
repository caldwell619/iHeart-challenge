import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography'

const IndividualSong = ({ song, index }) => {
  const backgroundAlternateClass = index % 2
    ? 'alt-background'
    : ''
  return (
    <div className="table-row" key={`individual-song-row-${index}`}>
      <Typography key={`individual-song-number-${index + Math.random()}`} component='div' variant='body1' className={`table-cell ${backgroundAlternateClass}`}>
        {index + 1}
      </Typography>
      {Object.values(song).map(dataPoint => {
        return (
          <Typography key={`individual-dataPoints-${dataPoint}-${index + Math.random()}`} component='div' variant='body1' className={`table-cell ${backgroundAlternateClass}`}>
            {dataPoint}
          </Typography>
        )
      })}
    </div>
  );
};

IndividualSong.propTypes = {
  song: PropTypes.object,
  index: PropTypes.number,
};

export default IndividualSong;