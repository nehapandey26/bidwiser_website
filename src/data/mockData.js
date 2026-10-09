/** Sample data for the in-product mock UIs shown on the landing page. */

export const appSidebar = [
  { label: 'Home', icon: 'home', active: true },
  { label: 'Company Profile', icon: 'building' },
  { label: 'Methodology Drafter', icon: 'workflow' },
  { label: 'Bid History', icon: 'history' },
]

export const bidPackages = Array.from({ length: 9 }).map((_, i) => ({
  title: 'Solar Energy',
  assignee: 'Ravi Patel',
  status: 'Forms & Formats Com…',
  deadline: 'Jun 30, 2026',
  access: ['Owner', 'Owner', 'Owner', 'Owner', 'Owner', 'View', 'Owner', 'Edit', 'Owner'][i],
}))

export const tenderMatches = [
  { name: 'Civil Works', meta: 'Expiring in 2 days', match: 90, icon: 'building' },
  { name: 'Water Management', meta: 'Expiring in 2 days', match: 90, icon: 'workflow' },
  { name: 'Road Construction', meta: 'Expiring in 2 days', match: 50, icon: 'workflow' },
  { name: 'Facility Management', meta: 'Expiring in 2 days', match: 40, icon: 'building' },
]

export const extractedForms = Array.from({ length: 9 }).map((_, i) => ({
  pages: i === 6 ? '35' : '35 - 36',
  header: 'Team & Personnel Details',
  form: 'Form A',
}))

/**
 * ✓ Figma product-showcase: the sidebar inside the "Active Bid Packages"
 * window. Kept separate from `appSidebar` because the other dashboard mocks
 * (AppDashboardMock / ExtractedFormsMock) show a different menu.
 */
export const showcaseSidebar = [
  { label: 'Home', icon: 'home', active: true },
  { label: 'Forms Extractor', icon: 'fileText' },
  { label: 'Methodology Drafter', icon: 'workflow' },
  { label: 'Bid Sequencer', icon: 'sort' },
]

/** ✓ Figma product-showcase: the "Tender Dashboard" window (front-left). */
export const tenderDashboard = {
  title: 'Tender Dashboard',
  rows: [
    {
      id: '348235_gujarat',
      type: 'DepartmentLocationS…',
      dept: 'Ahmedabad Municipal…',
      location: 'Ahmedabad',
      date: '12.10.2026',
    },
    {
      id: '348235_gujarat',
      type: 'DepartmentLocationS…',
      dept: 'Ahmedabad Municipal…',
      location: 'Ahmedabad',
      date: '12.10.2026',
    },
  ],
}
