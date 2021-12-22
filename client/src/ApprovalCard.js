import React from 'react';

const ApprovalCard = (props) => {
  console.log(props)
  return(
    <div className="ui card">
      <div className="content">
        {props.children}
      </div>
      <div class="extra content">
      <div class="ui two buttons">
        <div class="ui basic green button">Upvote</div>
        <div class="ui basic red button">DownVote</div>
      </div>
    </div>
    </div>
  )
}


export default ApprovalCard; 