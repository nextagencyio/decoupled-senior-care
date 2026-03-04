/**
 * Demo Mode Module
 *
 * This file contains ALL demo/mock mode functionality.
 * To remove demo mode from a real project:
 * 1. Delete this file (lib/demo-mode.ts)
 * 2. Delete the data/mock/ directory
 * 3. Delete app/components/DemoModeBanner.tsx
 * 4. Remove DemoModeBanner from app/layout.tsx
 * 5. Remove the demo mode check from app/api/graphql/route.ts
 */

import homepageData from '@/data/mock/homepage.json'
import communitiesData from '@/data/mock/communities.json'
import servicesData from '@/data/mock/services.json'
import activitiesData from '@/data/mock/activities.json'
import staffsData from '@/data/mock/staff.json'
import routesData from '@/data/mock/routes.json'

export function isDemoMode(): boolean {
  return process.env.NEXT_PUBLIC_DEMO_MODE !== 'false'
}

const mockDataMap: Record<string, any> = {
  'homepage.json': homepageData,
  'communities.json': communitiesData,
  'services.json': servicesData,
  'activities.json': activitiesData,
  'staff.json': staffsData,
  'routes.json': routesData,
}

function loadMockData(filename: string): any {
  return mockDataMap[filename] || null
}

export function handleMockQuery(body: string): any {
  try {
    const { query, variables } = JSON.parse(body)

    if (variables?.path) {
      const routePath = variables.path
      const routes = loadMockData('routes.json')
      if (routes && routes[routePath]) {
        return routes[routePath]
      }
    }

    if (query.includes('GetHomepageData') || query.includes('nodeHomepages')) {
      return loadMockData('homepage.json')
    }

    if (query.includes('GetCommunities') || query.includes('nodeCommunities')) {
      return loadMockData('communities.json')
    }

    if (query.includes('GetServices') || query.includes('nodeServices')) {
      return loadMockData('services.json')
    }

    if (query.includes('GetActivities') || query.includes('nodeActivities')) {
      return loadMockData('activities.json')
    }

    if (query.includes('GetStaffs') || query.includes('nodeStaffs')) {
      return loadMockData('staff.json')
    }

    return { data: {} }
  } catch (error) {
    console.error('Mock query error:', error)
    return { data: {}, errors: [{ message: 'Mock data error' }] }
  }
}
