import React from 'react';

export const IconTemp = ({temp, ciudad}) => {
  return <div>
      {           
        temp.max > 301.4?
        <img
        alt={ciudad}
        src={`https://ssl.gstatic.com/onebox/weather/48/sunny.png`}
        /> : temp.max > 298.40?
        <img
        alt={ciudad}
        src={`https://ssl.gstatic.com/onebox/weather/48/sunny_s_cloudy.png`}
        /> : temp.max > 296.40?
        <img
        alt={ciudad}
        src={`https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png`}
        /> :
        <img
        alt={ciudad}
        src={`https://ssl.gstatic.com/onebox/weather/48/cloudy.png`}
        />
      }
  </div>;
};
