import Image from 'next/image';
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();

  return (
    <header>
      <Image
        src='https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
        height={40}
        width={120}
        className='cursor-pointer'
        onClick={() => router.push('/')}
        />
    </header>
  )
}

export default Header;
