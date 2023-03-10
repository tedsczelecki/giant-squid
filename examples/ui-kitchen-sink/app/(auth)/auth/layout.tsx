'use client';
import React from 'react';
import { AuthLayout } from '@giant-squid/user-ui';
import { CommonLayout } from '../../../components/Layouts/Common';

type Props = {
  children: React.ReactNode;
};

export const AppAuthLayout = ({ children }: Props) => {
  return (
    <CommonLayout>
      <AuthLayout from="#322659" to="#6B46C1">
        {children}
      </AuthLayout>
    </CommonLayout>
  );
};

export default AppAuthLayout;
