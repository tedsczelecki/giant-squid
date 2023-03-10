'use-client';
import React from 'react';
import { Box } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import { VStack } from '@giant-squid/common-ui';
import { AvatarMenu } from '@giant-squid/user-ui';
import { sidenav } from '../../constants/routes';
import styled from '@emotion/styled';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

const SideNavButton = styled(Link)`
  width: 100%;
  text-align: left;
  display: block;
`;

export const Sidebar = () => {
  const { data: session } = useSession();
  return (
    <VStack backgroundColor="gray.900" width="300px" minHeight="100vh">
      <Box p="5" pb="0">
        <Link href="/">
          <Heading>Kitchen sink</Heading>
        </Link>
      </Box>
      <VStack flex="1" p="5">
        {sidenav.map(({ label, href, icon }) => (
          <SideNavButton href={href}>{label}</SideNavButton>
        ))}
      </VStack>
      <AvatarMenu
        displayName={session?.user?.name ?? session?.user?.email ?? ''}
        email={session?.user?.email}
        image={session?.user?.image ?? ''}
        onSignOutClick={signOut}
      />
    </VStack>
  );
};
