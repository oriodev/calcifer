'use client';

import { admin } from '@/actions/admin';
import { RoleGate } from '@/components/auth/role-gate';
import { FormSuccess } from '@/components/form-success';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { useCurrentRole } from '@/hooks/use-current-role';
import { UserRole } from '@prisma/client';

const AdminPage = () => {
  const onApiClick = () => {
    fetch('/api/admin').then((response) => {
      if (response.ok) {
        console.log('okay');
      } else {
        console.error('forbidden');
      }
    });
  };

  const onServerClick = () => {
    admin().then((data) => {
      if (data.error) {
        console.log(data.error);
      }

      if (data.success) {
        console.log(data.success);
      }
    });
  };

  return (
    <Card className="w-[600px]">
      <CardHeader className="text-2xl font-semibold text-center">
        <p>🔑 admin</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <RoleGate allowedRole={UserRole.ADMIN}>
          <FormSuccess message="u r alllowed here bc ur special & sexy :)" />
        </RoleGate>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
          <p className="text-sm font-medium">admin-only api route</p>
          <Button onClick={onApiClick}>click to test</Button>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
          <p className="text-sm font-medium">admin-only server action</p>
          <Button onClick={onServerClick}>click to test</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminPage;
