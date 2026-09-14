// Shared portfolio data used across the site
// Videos use Cloudinary CDN for optimized delivery

export type WorkItem = {
  id: number
  type: 'poster' | 'video'
  src: string
  title: string
  category: string
}

export const allWorks: WorkItem[] = [
  {
    id: 1,
    type: 'poster',
    src: '/portfolio/p1.jpeg',
    title: 'Your Brand Deserves Better Content',
    category: 'Design',
  },
  {
    id: 2,
    type: 'poster',
    src: '/portfolio/p2.jpeg',
    title: 'Creative Poster Design',
    category: 'Design',
  },
  {
    id: 3,
    type: 'video',
    src: 'https://res.cloudinary.com/dc4rdb6qg/video/upload/q_auto/f_auto/v1780561727/v1_sy6zpl.mp4',
    title: 'Brand Reel',
    category: 'Video',
  },
  {
    id: 4,
    type: 'video',
    src: 'https://res.cloudinary.com/dc4rdb6qg/video/upload/q_auto/f_auto/v1780561741/v2_f3wo3b.mp4',
    title: 'Brand Reel',
    category: 'Video',
  },
  {
    id: 5,
    type: 'video',
    src: 'https://res.cloudinary.com/dc4rdb6qg/video/upload/q_auto/f_auto/v1780561743/v3_dt5uqm.mp4',
    title: 'Brand Reel',
    category: 'Video',
  },
  {
    id: 6,
    type: 'video',
    src: 'https://res.cloudinary.com/dc4rdb6qg/video/upload/q_auto/f_auto/v1780561733/v4_kksvp9.mp4',
    title: 'Brand Reel',
    category: 'Video',
  },
  {
    id: 7,
    type: 'poster',
    src: '/portfolio/p3.jpg',
    title: 'Brand Identity Design',
    category: 'Design',
  },
  {
    id: 8,
    type: 'poster',
    src: '/portfolio/p4.jpg',
    title: 'Creative Poster Design',
    category: 'Design',
  },
  {
    id: 9,
    type: 'video',
    src: 'https://res.cloudinary.com/dc4rdb6qg/video/upload/q_auto/f_auto/v1780561736/v5_ztgk5w.mp4',
    title: 'Brand Reel',
    category: 'Video',
  },
]
