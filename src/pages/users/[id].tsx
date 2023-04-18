import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';

/**
 * Function to pre-render this page on each request using the data returned by getServerSideProps.
 * - The `getServerSideProps` only runs on server-side and never runs on the browser.
 * - When you request this page directly, `getServerSideProps` runs at request time, and this page will be pre-rendered with the returned props
 * @param context
 * @returns
 */
export async function getServerSideProps(context: GetServerSidePropsContext): Promise<GetServerSidePropsResult<any>> {
  return {
    props: {},
  };
}

export default function Users() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h3>The user {id}</h3>
      <div>
        <Link href="/">Go Home</Link>
      </div>
      <div>
        <Link href="/about">About</Link>
      </div>
    </div>
  );
}
