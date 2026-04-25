import { getWritingBySlug } from "@/lib/data";
export const dynamic = "force-dynamic";
import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getDirectDriveUrl } from "@/lib/utils";

export default async function WritingPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getWritingBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-zinc-50/50 font-sans text-zinc-900 selection:bg-zinc-200 selection:text-zinc-900">
      <div className="max-w-screen-md mx-auto px-6 py-24 md:py-32 space-y-16">
        {/* Navigation */}
        <nav className="animate-in fade-in slide-in-from-top-4 duration-700">
          <Link 
            href="/writing" 
            className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-400 hover:text-zinc-900 transition-colors"
          >
            ← Back to log
          </Link>
        </nav>

        {/* Hero Section */}
        <header className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-xs uppercase tracking-widest text-zinc-400 font-medium">
              <span>{post.category}</span>
              <span>•</span>
              <time dateTime={new Date(post.publishedAt).toISOString()}>
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] md:leading-[1.05]">
              {post.title}
            </h1>
          </div>
          <p className="text-xl md:text-2xl font-light text-zinc-500 italic max-w-2xl leading-relaxed">
            {post.excerpt}
          </p>
        </header>

        {/* Featured Image */}
        {post.imageUrl && (
          <div className="w-full aspect-video overflow-hidden bg-zinc-100 animate-in fade-in zoom-in-95 duration-1000 delay-300">
            <img 
              src={getDirectDriveUrl(post.imageUrl)} 
              alt={post.imageAlt || post.title} 
              className="w-full h-full object-cover grayscale opacity-90 mix-blend-multiply hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
            />
          </div>
        )}

        {/* Content Section */}
        <div className="prose prose-zinc prose-lg max-w-none prose-headings:font-light prose-headings:tracking-tight prose-p:font-light prose-p:leading-relaxed prose-p:text-zinc-700 prose-blockquote:font-light prose-blockquote:italic prose-blockquote:border-l-zinc-200 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 pb-32">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
        </div>
      </div>
    </article>
  );
}
