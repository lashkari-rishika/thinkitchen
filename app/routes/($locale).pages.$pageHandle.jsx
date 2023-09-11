import {json} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import invariant from 'tiny-invariant';

import {PageHeader} from '~/components';
import {routeHeaders} from '~/data/cache';
import {seoPayload} from '~/lib/seo.server';
import {AboutUS} from '~/components/AboutUS';
import Blog from '~/components/custom-components/BlogandBlogdetails/Blog'
import ContactUs from '~/components/commomComponent/ContactUS'


export const headers = routeHeaders;

export async function loader({request, params, context}) {
  invariant(params.pageHandle, 'Missing page handle');

  const {page} = await context.storefront.query(PAGE_QUERY, {
    variables: {
      handle: params.pageHandle,
      language: context.storefront.i18n.language,
    },
  });

  if (!page) {
    throw new Response(null, {status: 404});
  }

  const seo = seoPayload.page({page, url: request.url});

  return json({page, seo});
}

export default function Page() {
  const {page} = useLoaderData();
  const pagesWithComponents = ['About us', 'Blog', 'Career with us',];
  return (
    <>

        {pagesWithComponents.includes(page.title)  ? (
        // Render specific components based on page title
        <>
          {page.title === 'About us' && <AboutUS />}
          {page.title === 'Blog' && <Blog />}
          {page.title === 'Career with us' && <ContactUs/>}
        </>
      ) : (

          <div
            dangerouslySetInnerHTML={{ __html: page.body }}
            className="prose dark:prose-invert"
          />
        )}
    </>
  );
}

const PAGE_QUERY = `#graphql
  query PageDetails($language: LanguageCode, $handle: String!)
  @inContext(language: $language) {
    page(handle: $handle) {
      id
      title
      body
      seo {
        description
        title
      }
    }
  }
`;
