import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage?: string;
}

export function getAllPosts(): Post[] {
  const postsDir = path.join(process.cwd(), 'src', 'posts');
  const filenames = fs.readdirSync(postsDir);

  const posts = filenames.map((filename) => {
    const slug = filename.replace(/\.md$/, '');
    const fileContent = fs.readFileSync(path.join(postsDir, filename), 'utf8');
    const { data } = matter(fileContent);

    return {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      coverImage: data.coverImage || '/posts/iot-credits.jpg',
    };
  });

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
