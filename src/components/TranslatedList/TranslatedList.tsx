interface TranslatedListProps {
  items: string[];
  ordered?: boolean;
  className?: string;
  itemClassName?: string;
}

export function TranslatedList({ items, ordered = false, className, itemClassName }: TranslatedListProps) {
  const Tag = ordered ? 'ol' : 'ul';
  return (
    <Tag className={className}>
      {items.map((item, index) => (
        <li key={index} className={itemClassName}>{item}</li>
      ))}
    </Tag>
  );
}
