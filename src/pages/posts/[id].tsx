import { GetStaticPropsContext, GetStaticPathsContext, GetStaticPropsResult, GetStaticPathsResult } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';

/**
 * Function to pre-render this page at build time using the props returned by `getStaticProps`.
 * - The data required to render the page is available at build time ahead of a user’s request.
 * @param context 
 * @returns
 */
export async function getStaticProps(context: GetStaticPropsContext): Promise<GetStaticPropsResult<any>> {
  return {
    props: {},
  };
}

/**
 * Function to statically pre-render all the paths specified by getStaticPaths.
 * If a page has Dynamic Routes and uses getStaticProps, it needs to define a list of paths to be statically generated.
 * - The `getStaticPaths` must be used with `getStaticProps`
 * - You cannot use `getStaticPaths` with `getServerSideProps`
 * @param context
 * @returns
 */
export async function getStaticPaths(context: GetStaticPathsContext): Promise<GetStaticPathsResult<any>> {
  return {
    paths: [{ params: { id: 1 } }, { params: { id: 2 } }],
    fallback: false, // can also be true or 'blocking',
  };
}

export default function Posts() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h3>The post {id}</h3>
      <div>
        <Link href="/">Go Home</Link>
      </div>
      <div>
        <Link href="/about">About</Link>
      </div>
    </div>
  );
}
