import { Button, PasswordInput } from '@mantine/core';
import exp from 'constants';

function ChangePassword() {
   return (
      <>
         <PasswordInput
            placeholder="Изменить пароль"
            label="Пароль"
            description="Пароль должен включать минимум одну букву, число и специальный символ"
            withAsterisk
         />
         <div style={{ marginBottom: 10 }} />
         <Button variant="gradient"
            gradient={{ from: 'indigo', to: 'cyan' }}>
            Сохранить
         </Button>
      </>
   );
}

export default ChangePassword