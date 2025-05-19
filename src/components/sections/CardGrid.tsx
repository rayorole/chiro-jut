import { type PortableTextBlock } from 'next-sanity';
import PortableText from '../modules/PortableText';
import Card from '../modules/Card';
import { CardGridSection } from './types';

export default function CardGrid({
  section: { heading, content, cards },
}: {
  section: CardGridSection;
}) {
  return (
    <section className="py-12 md:py-16 my-10 md:my-14 bg-gray-50 rounded-4xl ">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{heading}</h2>
          <div className="text-xl text-gray-600">
            <PortableText className="text-xl" value={content as PortableTextBlock[]} />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards?.map((card, index) => <Card key={index} card={card} />)}
        </div>
      </div>
    </section>
  );
}
