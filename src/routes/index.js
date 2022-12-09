import { HeaderOnly } from '@/component/Layout';
import Blog from '@/pages/Blog';
import Home from '@/pages/Home';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/blog', component: Blog, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
