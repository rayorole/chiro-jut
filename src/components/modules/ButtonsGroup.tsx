import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { ButtonFragmentType } from '@/lib/sanity/queries/fragments/fragment.types';
import { getLinkByLinkObject } from '@/lib/links';
import Link from 'next/link';

export default function ButtonsGroup({
  buttons,
  size = 'xl',
  className,
}: {
  buttons: ButtonFragmentType[];
  size?: 'xl' | 'lg' | 'sm' | 'default' | 'icon';
  className?: string;
}) {
  return (
    <div className={cn('flex flex-col md:flex-row gap-4', className)}>
      {buttons.map((button) => (
        <Button asChild variant={button.variant} size={size} key={button._key}>
          <Link
            href={button.link ? getLinkByLinkObject(button.link) || '' : ''}
            target={button.link?.openInNewTab ? '_blank' : '_self'}
          >
            {button.text}
          </Link>
        </Button>
      ))}
    </div>
  );
}
