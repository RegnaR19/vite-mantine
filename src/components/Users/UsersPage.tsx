import { forwardRef } from 'react';
import { IconChevronRight, IconExternalLink, IconPencilPlus, IconUserPlus } from '@tabler/icons';
import { Group, Avatar, Text, Menu, UnstyledButton, Button } from '@mantine/core';
import avatar from "./../../assets/avatar.jpg";

interface UserButtonProps extends React.ComponentPropsWithoutRef<'button'> {
   img: string;
   name: string;
   icon?: React.ReactNode;
   id2: string,
   city: any,
   status: any
}

const UserButton = forwardRef<HTMLButtonElement, UserButtonProps>(
   ({ img, name, icon, id2, city, status, ...others }: UserButtonProps, ref) => (
      <UnstyledButton
         ref={ref}
         sx={(theme) => ({
            display: 'block',
            width: '100%',
            padding: theme.spacing.md,
            color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

            '&:hover': {
               backgroundColor:
                  theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
            },
         })}
         {...others}
      >
         <Group>
            <Avatar src={img} radius="xl" />

            <div style={{ flex: 1 }}>
               <Text size="sm" weight={500}>
                  {name}
               </Text>
               <Text size="sm" weight={200}>
                  ID: {id2}, {city}
               </Text>

               <Text color="dimmed" size="xs">
                  {status}
               </Text>
            </div>
            Подписаться
            {icon || <IconChevronRight size={16} />}
         </Group>
      </UnstyledButton>
   )
);

type Props = {
   id2?: any,
   name: any,
   city: any,
   status: any,
   img: any
}

const UsersPage: React.FC<Props> = ({ id2, name, city, status, img }) => {
   return (
      <Group position="center">
         <Menu withArrow>
            <Menu.Target>
               <UserButton
                  img={img}
                  id2={id2}
                  name={name}
                  city={city}
                  status={status}
               />
            </Menu.Target>
            <Menu.Dropdown>
               <Menu.Item
                  icon={<IconExternalLink size={14} />}
                  component="a"
                  href="/profile"
               >
                  Перейти в профиль
               </Menu.Item></Menu.Dropdown>
         </Menu>

         {/* <Button variant="gradient"
            leftIcon={<IconUserPlus />}
            gradient={{ from: 'indigo', to: 'cyan' }}>
            Подписаться
         </Button> */}
      </Group>

   );
}

export default UsersPage;