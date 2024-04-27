import MessageBoardCard from '@/components/message-board/message-board-card';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import React from 'react';
import { GiLoveLetter } from 'react-icons/gi';

const MessageBoard = () => {
  const messages = [
    {
      id: 1,
      title: 'hello world',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Sed ultricies consequat purus, quis tincidunt dui placerat sit amet.
  Ut eleifend eros id luctus fringilla. Proin eget dictum turpis. Nullam
  in est sit amet eros volutpat rutrum. Vestibulum ac ex at magna feugiat vestibulum.
  Cras euismod lorem et elit lobortis, vel pharetra leo interdum. Mauris id elit magna. 
  nteger posuere nunc vel neque efficitur, quis rhoncus mi pulvinar. Nulla facilisi.
  Ut a felis orci. Integer rutrum nunc et justo ultricies, non mattis odio lacinia. 
  Donec at ipsum consequat, tempor turpis eu, cursus sem. Suspendisse potenti.`,
      user: 'ori',
      date: '11/11/11',
    },
    // Add more cards as needed
  ];
  return (
    <div className="w-full max-h-[80vh] flex justify-center items-center overflow-y-hidden mt-[5rem]">
      <Card className="w-3/4 bg-emerald-950/50 max-h-[80vh] overflow-y-auto">
        <CardHeader className="semibold text-3xl flex flex-row gap-x-3 justify-center items-center pt-8">
          <GiLoveLetter />
          Message Board
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 text-black">
            {/* Map over cardsData to render each card */}
            {messages.map((message) => (
              <div key={message.id}>
                <MessageBoardCard
                  title={message.title}
                  content={message.content}
                  user={message.user}
                  date={message.date}
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MessageBoard;
