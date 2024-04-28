import PostOfficeInfo from '@/components/mail/post-office-info';
import SendMessageForm from '@/components/mail/send-message-form';
import SplitPage from '@/components/split-page';
import { getAllUsersNamesIdAddress } from '@/data/users';
import React from 'react';

const PostOffice = async () => {
  //
  // get all the uers
  //

  const users = await getAllUsersNamesIdAddress();

  return (
    <SplitPage
      rightSide={<PostOfficeInfo />}
      leftSide={<SendMessageForm users={users} />}
    />
  );
};

export default PostOffice;
