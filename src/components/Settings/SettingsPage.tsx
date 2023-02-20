// основная страница настроек
import ChangePassword from "./ChangePassword";
import UploadAvatar from "./UploadAvatar"

const SettingsPage = () => {
   return (
      <>
         Аватар
         <UploadAvatar />
         <div style={{ marginBottom: 10 }} />
         <ChangePassword />
      </>
   );
}

export default SettingsPage;