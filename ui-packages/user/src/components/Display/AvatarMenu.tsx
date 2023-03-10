'use-client';
import React from 'react';
import {
  Avatar,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Text,
  Button,
} from '@chakra-ui/react';
import { HiDotsVertical } from 'react-icons/hi';
import { VStack } from '@giant-squid/common-ui';

export type AvatarMenuProps = {
  displayName: string;
  email: string;
  image?: string;
  onSignOutClick: () => void;
};

export const AvatarMenu = ({
  displayName,
  email,
  image,
  onSignOutClick,
}: AvatarMenuProps) => (
  <Menu>
    <MenuButton
      as={Button}
      height="min-content"
      py="5"
      pl="5"
      pr="0"
      display="block"
      width="100%"
      variant="ghost"
      colorScheme="teal"
    >
      <Box
        display="grid"
        gridTemplateColumns="48px minmax(50px, 1fr) minmax(40px, 40px)"
        alignItems="center"
        width="100%"
        gridGap="2"
      >
        <Avatar name={displayName} src={image} />
        <VStack
          gap="1"
          flex="1"
          overflow="hidden"
          textOverflow="ellipsis"
          alignItems="flex-start"
        >
          <Text fontSize="xl">{displayName}</Text>
          <Text fontSize="sm">{email}</Text>
        </VStack>
        <HiDotsVertical />
      </Box>
    </MenuButton>
    <MenuList>
      <MenuDivider />
      <MenuItem onClick={() => onSignOutClick?.()}>Sign out</MenuItem>
    </MenuList>
  </Menu>
);
