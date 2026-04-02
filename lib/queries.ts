// Tagged template that returns the query string
const gql = (strings: TemplateStringsArray, ...values: any[]) => strings.reduce((a, s, i) => a + s + (values[i] || ''), '')

// Homepage query
export const GET_HOMEPAGE_DATA = gql`
  query GetHomepageData {
    nodeHomepages(first: 1) {
      nodes {
        id
        title
        path
        heroTitle
        heroSubtitle
        heroDescription {
          processed
        }
        statsItems {
          ... on ParagraphStatItem {
            id
            number
            label
          }
        }
        featuredCommunitiesTitle
        ctaTitle
        ctaDescription {
          processed
        }
        ctaPrimary
        ctaSecondary
      }
    }
  }
`

// Communities
export const GET_COMMUNITIES = gql`
  query GetCommunities($first: Int = 20) {
    nodeCommunities(first: $first, sortKey: TITLE) {
      nodes {
        id
        title
        path
        ... on NodeCommunity {
          body {
            processed
            summary
          }
          careLevel {
            ... on TermInterface {
              id
              name
            }
          }
          address
          phone
          capacity
          amenities
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_COMMUNITY_BY_PATH = gql`
  query GetCommunityByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeCommunity {
            id
            title
            path
            body {
              processed
            }
            careLevel {
              ... on TermInterface {
                id
                name
              }
            }
            address
            phone
            capacity
            amenities
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// Services
export const GET_SERVICES = gql`
  query GetServices($first: Int = 20) {
    nodeServices(first: $first, sortKey: TITLE) {
      nodes {
        id
        title
        path
        ... on NodeService {
          body {
            processed
            summary
          }
          serviceCategory {
            ... on TermInterface {
              id
              name
            }
          }
          availability
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_SERVICE_BY_PATH = gql`
  query GetServiceByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeService {
            id
            title
            path
            body {
              processed
            }
            serviceCategory {
              ... on TermInterface {
                id
                name
              }
            }
            availability
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// Activities
export const GET_ACTIVITIES = gql`
  query GetActivities($first: Int = 20) {
    nodeActivities(first: $first, sortKey: TITLE) {
      nodes {
        id
        title
        path
        ... on NodeActivity {
          body {
            processed
            summary
          }
          activityType {
            ... on TermInterface {
              id
              name
            }
          }
          schedule
          location
          instructor
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_ACTIVITY_BY_PATH = gql`
  query GetActivityByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeActivity {
            id
            title
            path
            body {
              processed
            }
            activityType {
              ... on TermInterface {
                id
                name
              }
            }
            schedule
            location
            instructor
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// Staff
export const GET_STAFF = gql`
  query GetStaff($first: Int = 50) {
    nodeStaffs(first: $first, sortKey: TITLE) {
      nodes {
        id
        title
        path
        ... on NodeStaff {
          body {
            processed
          }
          position
          department {
            ... on TermInterface {
              id
              name
            }
          }
          email
          phone
          photo {
            url
            alt
            width
            height
            variations(styles: [MEDIUM, THUMBNAIL]) {
              name
              url
              width
              height
            }
          }
          certifications
          education {
            processed
          }
        }
      }
    }
  }
`

export const GET_STAFF_BY_PATH = gql`
  query GetStaffByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeStaff {
            id
            title
            path
            body {
              processed
            }
            position
            department {
              ... on TermInterface {
                id
                name
              }
            }
            email
            phone
            photo {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
            certifications
            education {
              processed
            }
          }
        }
      }
    }
  }
`

// Generic route query for pages and all content types
export const GET_NODE_BY_PATH = gql`
  query GetNodeByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodePage {
            id
            title
            body {
              processed
            }
          }
          ... on NodeCommunity {
            id
            title
            path
            body {
              processed
            }
            careLevel {
              ... on TermInterface {
                id
                name
              }
            }
            address
            phone
            capacity
            amenities
          }
          ... on NodeService {
            id
            title
            path
            body {
              processed
            }
            serviceCategory {
              ... on TermInterface {
                id
                name
              }
            }
            availability
          }
          ... on NodeActivity {
            id
            title
            path
            body {
              processed
            }
            activityType {
              ... on TermInterface {
                id
                name
              }
            }
            schedule
            location
            instructor
          }
          ... on NodeStaff {
            id
            title
            path
            body {
              processed
            }
            position
            department {
              ... on TermInterface {
                id
                name
              }
            }
            email
            phone
            certifications
            education {
              processed
            }
          }
          ... on NodeHomepage {
            id
            title
            heroTitle
            heroSubtitle
            heroDescription {
              processed
            }
            statsItems {
              ... on ParagraphStatItem {
                id
                number
                label
              }
            }
            featuredCommunitiesTitle
            ctaTitle
            ctaDescription {
              processed
            }
            ctaPrimary
            ctaSecondary
          }
        }
      }
    }
  }
`

// Featured communities for homepage
export const GET_FEATURED_COMMUNITIES = gql`
  query GetFeaturedCommunities {
    nodeCommunities(first: 3, sortKey: TITLE) {
      nodes {
        id
        title
        path
        ... on NodeCommunity {
          careLevel {
            ... on TermInterface {
              id
              name
            }
          }
          address
          capacity
          image {
            url
            alt
            variations(styles: [MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

// Featured services for homepage
export const GET_FEATURED_SERVICES = gql`
  query GetFeaturedServices {
    nodeServices(first: 3, sortKey: TITLE) {
      nodes {
        id
        title
        path
        ... on NodeService {
          serviceCategory {
            ... on TermInterface {
              id
              name
            }
          }
          availability
          image {
            url
            alt
            variations(styles: [MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

// Upcoming activities for homepage
export const GET_UPCOMING_ACTIVITIES = gql`
  query GetUpcomingActivities {
    nodeActivities(first: 3, sortKey: TITLE) {
      nodes {
        id
        title
        path
        ... on NodeActivity {
          activityType {
            ... on TermInterface {
              id
              name
            }
          }
          schedule
          location
          instructor
        }
      }
    }
  }
`
