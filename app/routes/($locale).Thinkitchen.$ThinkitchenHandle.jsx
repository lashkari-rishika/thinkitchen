import {json} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';
import invariant from 'tiny-invariant';

import styles from '../styles/custom-font.css';

import {PageHeader, Section} from '~/components';
import {seoPayload} from '~/lib/seo.server';
import {routeHeaders} from '~/data/cache';

const BLOG_HANDLE = 'Thinkitchen';

export const headers = routeHeaders;

export const links = () => {
  return [{rel: 'stylesheet', href: styles}];
};

export async function loader({request, params, context}) {
  const {language, country} = context.storefront.i18n;

  invariant(params.newsHandle, 'Missing news handle');

  const {blog} = await context.storefront.query(ARTICLE_QUERY, {
    variables: {
      blogHandle: BLOG_HANDLE,
      articleHandle: params.newsHandle,
      language,
    },
  });

  if (!blog?.articleByHandle) {
    throw new Response(null, {status: 404});
  }

  const article = blog.articleByHandle;

  const formattedDate = new Intl.DateTimeFormat(`${language}-${country}`, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(article?.publishedAt));

  const seo = seoPayload.article({article, url: request.url});

  return json({article, formattedDate, seo});
}

export default function Article() {
  const {article, formattedDate} = useLoaderData();

  const {title, image, contentHtml, author} = article;

  return (
    <>
      <PageHeader heading={title} variant="blogPost">
        <span>
          {formattedDate} &middot; {author?.name}
        </span>
      </PageHeader>
      <Section as="article" padding="x">
        {image && (
          <Image
            data={image}
            className="w-full mx-auto max-w-7xl"
            sizes="90vw"
            loading="eager"
          />
        )}
        <div className="mx-8 sm-only:mx-0">
          <div className="lg-only:px-2 mt-3 space-y-2">
            <p className="font-bold pt-1 pb-0 lg:font-bold">
              ANALYTICS SOLUTIONS
            </p>
            <p className="pb-3 border-b border-gray-300">
              The peak of summer is here. It means, it’s time to binge-eat
              mangoes and pull out all the linens, florals from the closet. Just
              like you change your personal style as per the season, you must
              change the dining table setting and style as per the season. It’s
              these little things that make all the difference. This hot and
              humid season calls for a more casual table styling. But what do we
              mean exactly? Let’s find out. In today’s blog, we’ll shed some
              sunshine on trendy summer table styling ideas and tips:
            </p>
          </div>

          <div className="lg-only:px-2 mt-3 space-y-2">
            <p className="font-bold ">1. ADD SOME FLOWERS:</p>
            <p className="pb-3 border-b border-gray-300">
              Floral comes first. Your dining area is incomplete without some
              pretty flowers during the summer. Add a dash of colour, aroma, and
              vibe to the dining area by simply getting your favourite flowers.
              If you want a little luxurious feel, invest in a quality glass
              vase and see how it changes your table style. A good glass vase
              would work as a standalone styling prop for the dining table.
            </p>
          </div>

          <div className="lg-only:px-2  mt-3 space-y-2">
            <p className="font-bold pt-1 pb-0">2. LINEN TABLE RUNNER:</p>
            <p className="pb-3 border-b border-gray-300">
              Just like you prefer linens in the summer season, your table too
              would look prettier with linen table runners. Linen always feels
              more homely and welcoming. So if you are hosting a summer brunch
              at home, this table setting would be just perfect. If your dinner
              plate setting is simple and basic, you could even opt for a
              printed linen table runner.
            </p>
          </div>

          <div className="lg-only:px-2 mt-3 space-y-2">
            <p className="font-bold pt-1 pb-0 sm-only:hidden">
              3.PRINTED DINNER PLATES AND BOWLS:
            </p>
            <p className="md:hidden font-bold ">
              3.PRINTED DINNER PLATES AND BOWL:
            </p>
            <p className="pb-3 border-b border-gray-300">
              Adding printed dinner plates and bowls to your table setting can
              instantly elevate your summer dining experience. The vibrant
              colours and playful patterns can bring a fun and festive vibe to
              any meal, whether it's a casual get-together or a formal dinner
              party. Plus, printed dinnerware is a great way to incorporate
              seasonal themes into your table setting, from floral patterns to
              beachy motifs. With so many options available, you can easily mix
              and match different prints to create a unique and personalized
              table setting. You can get some adorable printed plates and bowls
              at thinKitchen.
            </p>
          </div>

          <div className="lg-only:px-2 mt-3 space-y-2">
            <p className="font-bold pt-1 pb-0">
              4.PASTEL CUTLERY AND CROCKERY:
            </p>
            <p className="pb-3 border-b border-gray-300">
              The soft hues of pastel colours such as mint, lavender, and baby
              blue create a refreshing and calming atmosphere which is perfect
              for warm weather. Pastel cutlery and crockery also add a touch of
              elegance and sophistication to your table setting, making it
              perfect for special occasions such as summer parties or romantic
              dinner dates. Additionally, the light colours of pastel cutlery
              and crockery can complement any summer-themed decor or floral
              arrangements, making your table setting look even more beautiful
              and cohesive. To spruce things up, you could mix pastel cutlery
              and crockery with an elegant gold cutlery set. It will create the
              right contemporary table setting for summer.
            </p>
          </div>

          <div className="lg-only:px-2 mt-3 space-y-2">
            <p className="font-bold pt-1 pb-0 text-justify">
              5.CUTE DESSERT BOWLS:
            </p>
            <p className="pb-3 border-b border-gray-300">
              Summer is all about fruits and desserts. And when it comes to
              dinner table setting, just bowls, and plates aren’t enough. You
              have to choose suitable dessert bowls too. After all, any meal is
              incomplete without a good dessert. With proper dessert bowls, you
              will be able to create a burst of excitement at the dining table.
              Whether it's a fruity sorbet or an indulgent chocolate mousse, the
              presentation of a dessert can make all the difference, and a big
              part of the presentation is choosing stylish dessert bowls. You
              can browse through a range of dessert bowls at thinKitchen and
              pick the one that’s most appealing to you. Along with dessert
              bowls, you can also look at popsicle makes.
            </p>
          </div>

          <div className="lg-only:px-2 mt-3 space-y-2">
            <p className="font-bold pt-1 pb-0">6.WINE GLASSES:</p>
            <p className="pb-3">
              {' '}
              It’s always wine-o-clock in the summer season. And that’s why,
              your table setting is incomplete without pretty wine glasses. The
              wine glasses you pick would depend on the type of wine you and
              your guests prefer. For those who enjoy red wine, you could go for
              a broader base of red wine glasses. And for the ones who relish
              white wine, the Chardonnay wine glasses would be ideal for you.
              Different shapes of wine glasses are designed for different types
              of wine and choosing the right one will only amplify your drinking
              experience. So make sure you make an informed decision when it
              comes to buying wine glasses. At thinKitchen, we have all types of
              wine glasses from the best global brands.
            </p>
          </div>
        </div>
        <div
          dangerouslySetInnerHTML={{__html: contentHtml}}
          className="article"
        />
      </Section>
    </>
  );
}

const ARTICLE_QUERY = `#graphql
  query ArticleDetails(
    $language: LanguageCode
    $blogHandle: String!
    $articleHandle: String!
  ) @inContext(language: $language) {
    blog(handle: $blogHandle) {
      articleByHandle(handle: $articleHandle) {
        title
        contentHtml
        publishedAt
        author: authorV2 {
          name
        }
        image {
          id
          altText
          url
          width
          height
        }
        seo {
          description
          title
        }
      }
    }
  }
`;
