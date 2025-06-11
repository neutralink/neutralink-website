import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface Post {
  coverImage: string;
  title: string;
  slug: string;
  date: string;
  category: string;
  excerpt: string;
}

export const getAllPosts = (): Post[] => {
  const postsDirectory = path.join(process.cwd(), 'src', 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  const posts: Post[] = filenames
    .filter((filename) => filename.endsWith('.md'))
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContent);
      const slug = filename.replace(/\.md$/, '');

      return {
        coverImage: `/images/${data.coverImage ?? 'default.jpg'}`,
        title: data.title ?? 'Sem título',
        slug,
        date: data.date ?? '',
        category: data.category ?? '',
        excerpt: data.excerpt ?? '',
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
};