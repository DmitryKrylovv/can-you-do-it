import { Eye, MessageCircle, Bookmark, Clock } from 'lucide-react';
import { BlogPost } from '@/pages/BlogPage';
import { cn } from '@/lib/utils';

interface BlogPostCardProps {
  post: BlogPost;
  featured?: boolean;
}

const BlogPostCard = ({ post, featured = false }: BlogPostCardProps) => {
  return (
    <article className={cn(
      "bg-card border border-border rounded-2xl overflow-hidden transition-all hover:border-primary/30 hover:shadow-lg group",
      featured && "ring-1 ring-primary/10"
    )}>
      {/* Author & Meta */}
      <div className="p-4 pb-0 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-lg">
            {post.author.avatar}
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="font-medium text-foreground">{post.author.name}</span>
            <span className="text-muted-foreground">·</span>
            <span className="text-muted-foreground">{post.publishedAt}</span>
            <span className="text-muted-foreground">·</span>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Eye className="w-3.5 h-3.5" />
              {post.views.toLocaleString('ru-RU')}
            </div>
          </div>
        </div>
        <span className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-full font-medium">
          {post.category}
        </span>
      </div>

      {/* Title */}
      <div className="px-4 pt-3">
        <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors cursor-pointer">
          {post.title}
        </h2>
      </div>

      {/* Actions */}
      <div className="px-4 pt-2 pb-3 flex items-center gap-4">
        <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors">
          <MessageCircle className="w-4 h-4" />
          Обсудить
          {post.commentsCount > 0 && (
            <span className="text-xs bg-muted px-1.5 py-0.5 rounded-full">
              {post.commentsCount}
            </span>
          )}
        </button>
        <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors">
          <Bookmark className="w-4 h-4" />
          В закладки
        </button>
        <div className="flex items-center gap-1.5 text-sm text-muted-foreground ml-auto">
          <Clock className="w-4 h-4" />
          {post.readTime} мин
        </div>
      </div>

      {/* Cover Image */}
      {featured && (
        <div className="relative aspect-[2/1] overflow-hidden">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-white/90 text-sm line-clamp-2">{post.excerpt}</p>
          </div>
        </div>
      )}
    </article>
  );
};

export default BlogPostCard;
