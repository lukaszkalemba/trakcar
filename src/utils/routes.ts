import calendar_icon from 'assets/svgs/icon_calendar-white.svg';
import positions_icon from 'assets/svgs/icon_positions.svg';
import organization_icon from 'assets/svgs/icon_organization-white.svg';

interface Route {
  id: number;
  name: string;
  subName: string;
  path: string;
  icon: string;
}

export const routes: Route[] = [
  {
    id: 0,
    name: 'Orders schedule',
    subName: 'orders',
    path: '/',
    icon: calendar_icon,
  },
  {
    id: 1,
    name: 'Manage positions',
    subName: 'positions',
    path: '/positions',
    icon: positions_icon,
  },
  {
    id: 2,
    name: 'Manage organization',
    subName: 'organization',
    path: '/organization',
    icon: organization_icon,
  },
];
