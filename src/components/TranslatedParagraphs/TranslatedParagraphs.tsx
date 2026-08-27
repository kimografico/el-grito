interface TranslatedParagraphsProps {
  text: string;
  className?: string;
}

export function TranslatedParagraphs({ text, className }: TranslatedParagraphsProps) {
  return (
    <div className={className}>
      {text.split('\n\n').map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
}
