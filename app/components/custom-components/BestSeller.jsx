import {Link} from '@remix-run/react';
import '../../styles/app.css';
import data from '../../../JSON/db.json'
import {ProductCard, Section} from '~/components';
import {AiOutlineHeart} from 'react-icons/ai';

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
            <ProductCard
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

