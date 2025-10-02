import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [index('routes/home.tsx'), route('bracket-builder', 'routes/bracket-builder.tsx')] satisfies RouteConfig;
