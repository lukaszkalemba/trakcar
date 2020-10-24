import calendar_icon from 'assets/svgs/icon_calendar.svg';
import positions_icon from 'assets/svgs/icon_positions.svg';
import profile_icon from 'assets/svgs/icon_profile-white.svg';
import organization_icon from 'assets/svgs/icon_organization.svg';

interface Route {
  id: number;
  name: string;
  path: string;
  icon: string;
}

export const routes: Route[] = [
  {
    id: 0,
    name: 'home',
    path: '/',
    icon: calendar_icon,
  },
  {
    id: 1,
    name: 'positions',
    path: '/positions',
    icon: positions_icon,
  },
  {
    id: 2,
    name: 'profile',
    path: '/profile',
    icon: profile_icon,
  },
  {
    id: 3,
    name: 'organization',
    path: 'organization',
    icon: organization_icon,
  },
];
