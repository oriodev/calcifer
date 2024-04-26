import { ExtendedUser } from '@/next-auth';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Badge } from '../ui/badge';

interface UserInfoProps {
  user?: ExtendedUser;
  label: string;
}

export const UserInfo = ({ user, label }: UserInfoProps) => {
  return (
    <Card className="w-[600px] shadow-md">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">{label}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* id */}
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
          <p className="text-sm font-medium">ID</p>
          <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100  rounded-md">
            {user?.id}{' '}
          </p>
        </div>

        {/* name */}
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
          <p className="text-sm font-medium">NAME</p>
          <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100  rounded-md">
            {user?.name}{' '}
          </p>
        </div>

        {/* email */}
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
          <p className="text-sm font-medium">EMAIL</p>
          <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100  rounded-md">
            {user?.email}{' '}
          </p>
        </div>

        {/* 2fa */}
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
          <p className="text-sm font-medium">2FA</p>
          <Badge variant={user?.isTwoFactorEnabled ? 'success' : 'destructive'}>
            {user?.isTwoFactorEnabled ? 'ON' : 'OFF'}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};
