import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import NavItems from './NavItems';
export default async function Navbar() {
  const { isAuthenticated } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <div>
      <NavItems isLoggedIn={isUserAuthenticated} picture={user?.picture || ""} />
    </div>
  );
};
