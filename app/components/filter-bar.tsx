import Link from 'next/link';
import { Database, Constants } from '@/types/supabase';

type MediumFilter = Database['public']['Enums']['medium'];

const MEDIUM_LABELS: Record<MediumFilter, string> = {
  ceramic: 'Ceramică',
  print: 'Print',
  other: 'Altele',
};

interface FilterBarProps {
  activeFilter: MediumFilter | null;
}

export default function FilterBar({ activeFilter }: FilterBarProps) {
  const activePillClass = 'px-6 py-2 rounded text-base-comic bg-white text-black';
  const inactivePillClass = 'px-6 py-2 rounded text-base-comic bg-white bg-opacity-30 text-gray-400 hover:bg-opacity-50 transition-colors';

  return (
    <div className="flex gap-3 mb-12 flex-wrap justify-center">
      <Link href="/" scroll={false} className={activeFilter === null ? activePillClass : inactivePillClass}>
        Toate
      </Link>
      {Constants.public.Enums.medium.map((medium) => (
        <Link
          key={medium}
          href={`/?medium=${medium}`}
          scroll={false}
          className={activeFilter === medium ? activePillClass : inactivePillClass}
        >
          {MEDIUM_LABELS[medium as MediumFilter]}
        </Link>
      ))}
    </div>
  );
}
