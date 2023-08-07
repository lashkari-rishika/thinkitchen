import {Link} from '@remix-run/react';
import '../styles/app.css';
import {Section} from '~/components';

import {AiOutlineHeart} from 'react-icons/ai';

import arrival1 from '../asset/arrival1.png';
import { BestSellerCard } from './BestSellerCard';

const mockProducts = {
  nodes: new Array(12).fill(''),
};

export function BestSeller({
  title = 'Featured Products',
  products = mockProducts,
  count = 12,
  ...props
}) {
  return (
    <>
      <Section
        className="sm-only:px-3 px-10"
        heading={title}
        padding="y"
        {...props}
      >
        <div className="swimlane hiddenScroll">
          {products.nodes.map((product) => (
            <BestSellerCard
              product={product}
              key={product.id}
              className="snap-start w-80"
            />
          ))}
        </div>
      </Section>
    </>
  );
}
