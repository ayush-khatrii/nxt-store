import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import NavItems from './NavItems';
export default async function Navbar() {
  const { isAuthenticated } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  console.log('isUserAuthenticated', isUserAuthenticated);
  return (
    <div>
      <NavItems isLoggedIn={isUserAuthenticated} user={user} />
    </div>
  );
};
