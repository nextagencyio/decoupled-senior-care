import { test, expect } from '@playwright/test'

test.describe('Senior Care - Non-demo mode', () => {
  test('homepage loads with real content', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Golden Horizons/i)
    await expect(page.getByText('Community Collective').first()).toBeVisible()
    await expect(page.getByText('Where Every Day Feels Like Home')).toBeVisible()
  })

  test('communities listing shows content', async ({ page }) => {
    await page.goto('/communities')
    await expect(page.locator('h1')).toContainText('Communities')
    // Should show real community names from Drupal
    await expect(page.getByText('Sunrise Gardens Independent Living').first()).toBeVisible()
    await expect(page.getByText('Maple Court Assisted Living').first()).toBeVisible()
  })

  test('community detail page loads', async ({ page }) => {
    await page.goto('/communities/sunrise-gardens-independent-living')
    await expect(page.getByText('Sunrise Gardens').first()).toBeVisible()
  })

  test('services listing shows content', async ({ page }) => {
    await page.goto('/services')
    await expect(page.locator('h1')).toContainText('Services')
    await expect(page.getByText('Memory Care', { exact: true }).first()).toBeVisible()
  })

  test('activities listing shows content', async ({ page }) => {
    await page.goto('/activities')
    await expect(page.locator('h1')).toContainText('Activities')
    await expect(page.getByText('Yoga for Seniors').first()).toBeVisible()
  })

  test('staff listing shows content', async ({ page }) => {
    await page.goto('/staff')
    await expect(page.locator('h1')).toContainText('Staff')
    await expect(page.getByText('Patricia Thompson').first()).toBeVisible()
  })

  test('navigation links work', async ({ page }) => {
    await page.goto('/')
    // Click on Programs (services) link in nav
    await page.getByRole('link', { name: 'Programs' }).first().click()
    await expect(page).toHaveURL(/\/services/)
    await expect(page.locator('h1')).toContainText('Services')
  })
})
