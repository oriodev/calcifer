import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from '../ui/card';

interface MessageBoardCardProps {
  title: string;
  content: string;
  user: string;
  date: string;
}

const MessageBoardCard = ({
  title,
  content,
  user,
  date,
}: MessageBoardCardProps) => {
  return (
    <Card className="bg-foreground text-background">
      <CardHeader className="text-2xl font-bold">{title}</CardHeader>
      <CardContent>{content}</CardContent>
      <CardFooter className="flex justify-between text-muted-foreground">
        <div>{date}</div>
        <div>{user}</div>
      </CardFooter>
    </Card>
  );
};

export default MessageBoardCard;
