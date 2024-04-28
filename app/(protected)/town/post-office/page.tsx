import PostOfficeInfo from '@/components/post-office/post-office-info';
import SendMessageForm from '@/components/post-office/send-message-form';
import SplitPage from '@/components/split-page';
import { getAllUsersNamesAndIds } from '@/data/users';
import React from 'react';

const PostOffice = async () => {
  //
  // get all the uers
  //

  const users = await getAllUsersNamesAndIds();

  return (
    <SplitPage
      rightSide={<PostOfficeInfo />}
      leftSide={<SendMessageForm users={users} />}
    />
  );
};

export default PostOffice;
