/**
 * Injecte des données structurées schema.org.
 * Composant serveur : aucun impact sur le rendu visuel.
 */
export function JsonLd({ data }: { data: Record<string, unknown>[] }) {
  return (
    <>
      {data.map((entry, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(entry) }}
        />
      ))}
    </>
  );
}
