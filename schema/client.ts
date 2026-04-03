/**
 * Typed client for senior-care content types.
 *
 * Provides getEntryByPath with support for all node types
 * and a raw() method for custom GraphQL queries.
 */

import type { DecoupledClient } from 'decoupled-client'
import type { DrupalNode } from 'decoupled-client'
import type { QueryOptions } from 'decoupled-client'

// Placeholder types
export type ContentNode = DrupalNode
export type ContentTypeName = string

export interface ContentTypeMap {
  [key: string]: DrupalNode
}

export interface TypedClient {
  getEntries<K extends ContentTypeName>(type: K, options?: QueryOptions): Promise<DrupalNode[]>
  getEntry<K extends ContentTypeName>(type: K, id: string): Promise<DrupalNode | null>
  getEntryByPath(path: string): Promise<ContentNode | null>
  raw<T = any>(query: string, variables?: Record<string, any>): Promise<T>
}

const ROUTE_QUERY = `
  query ($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodePage {
            __typename id title path
            body { processed }
          }
          ... on NodeHomepage {
            __typename id title path
            heroTitle
            heroSubtitle
            heroDescription { processed }
            statsItems {
              ... on ParagraphStatItem {
                id number label
              }
            }
            featuredCommunitiesTitle
            ctaTitle
            ctaDescription { processed }
            ctaPrimary
            ctaSecondary
          }
          ... on NodeCommunity {
            __typename id title path
            body { processed summary }
            careLevel { ... on TermInterface { id name } }
            address phone capacity amenities
            image { url alt width height variations(styles: [LARGE, MEDIUM]) { name url width height } }
          }
          ... on NodeService {
            __typename id title path
            body { processed summary }
            serviceCategory { ... on TermInterface { id name } }
            availability
            image { url alt width height variations(styles: [LARGE, MEDIUM]) { name url width height } }
          }
          ... on NodeActivity {
            __typename id title path
            body { processed summary }
            activityType { ... on TermInterface { id name } }
            schedule location instructor
            image { url alt width height variations(styles: [LARGE, MEDIUM]) { name url width height } }
          }
          ... on NodeStaff {
            __typename id title path
            body { processed }
            position
            department { ... on TermInterface { id name } }
            email phone
            photo { url alt width height variations(styles: [LARGE, MEDIUM]) { name url width height } }
            certifications
            education { processed }
          }
        }
      }
    }
  }
`

export function createTypedClient(client: DecoupledClient): TypedClient {
  return {
    async getEntries() { return [] },
    async getEntry() { return null },
    async getEntryByPath(path) {
      return client.queryByPath(path, ROUTE_QUERY)
    },
    async raw(query, variables) { return client.query(query, variables) },
  }
}
