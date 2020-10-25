import calendar_icon from 'assets/svgs/icon_calendar.svg';
import positions_icon from 'assets/svgs/icon_positions.svg';
import organization_icon from 'assets/svgs/icon_organization-white.svg';

interface Route {
  id: number;
  name: string;
  path: string;
  icon: string;
}

export const routes: Route[] = [
  {
    id: 0,
    name: 'schedule',
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
    name: 'organization',
    path: 'organization',
    icon: organization_icon,
  },
];
