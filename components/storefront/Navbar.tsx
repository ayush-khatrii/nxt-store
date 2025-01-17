import { currentUser } from '@clerk/nextjs/server';
import NavItems from './NavItems';
import { redis } from '@/lib/redis';
import { Cart } from '@/lib/interfaces';
export default async function Navbar() {
  const user = await currentUser();
  const cart: Cart | null = await redis.get(`cart-${user?.id}`);

  return (
    <div className='bg-white w-full px-4'>
      <NavItems cart={cart} />
    </div>
  );
};
