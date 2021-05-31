import React from 'react';

function PopupInfo (props) {
  const {info} = props;

  return (
    <div>
      <div>
        <a
          target="_new"
        >
          {info.name}
          {info.region[0]}
        </a>
      </div>
      <img width={240} src={'info.image'} />
    </div>
  );
}

export default (PopupInfo)