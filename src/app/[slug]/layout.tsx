export default function PageLayout({
    children,
    params
  }: Readonly<{
    children: React.ReactNode;
    params: {slug: string}
  }>) {
    return (
      <div className="relative">
        <div className="absolute top-4 left-4">
            <h3 className="text-primary">Page Collection &gt; {params.slug} page</h3>
        </div>
        {children}
      </div>
    );
  }
  