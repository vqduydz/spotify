import Home from '~/pages/Home';
import Search from '~/pages/Search';
import Library from '~/pages/Library';
import Signup from '~/pages/Signup';
import Login from '~/pages/Login';
import Account from '~/pages/Account';
import Profile from '~/pages/Profile';
import Premium from '~/pages/Premium';
import Support from '~/pages/Support';
import Download from '~/pages/Download';

import { HeaderOnlyLayout, SearchLayout } from '~/components/Layouts';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/search', component: Search, layout: SearchLayout },
    { path: '/library', component: Library },
    { path: '/signup', component: Signup, layout: null },
    { path: '/login', component: Login, layout: null },
    { path: '/account', component: Account, layout: HeaderOnlyLayout },
    { path: '/profile', component: Profile, layout: HeaderOnlyLayout },
    { path: '/premium', component: Premium, layout: HeaderOnlyLayout },
    { path: '/support', component: Support, layout: HeaderOnlyLayout },
    { path: '/download', component: Download, layout: HeaderOnlyLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
