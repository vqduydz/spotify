import Home from '~/pages/Home';
import Search from '~/pages/Search';
import Library from '~/pages/Library';
import Signup from '~/pages/Signup';
import Login from '~/pages/Login';
import Account from '~/pages/Account';
import Profile from '~/pages/Profile';
import Upgrade from '~/pages/Upgrade';
import Support from '~/pages/Support';
import Download from '~/pages/Download';

import { HeaderOnly } from '~/components/Layouts';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/search', component: Search },
    { path: '/library', component: Library },
    { path: '/signup', component: Signup, layout: null },
    { path: '/login', component: Login, layout: null },
    { path: '/account', component: Account, layout: HeaderOnly },
    { path: '/profile', component: Profile, layout: HeaderOnly },
    { path: '/upgrade', component: Upgrade, layout: HeaderOnly },
    { path: '/support', component: Support, layout: HeaderOnly },
    { path: '/download', component: Download, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
