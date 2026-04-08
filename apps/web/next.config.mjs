/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // Disable SWC lockfile patching that fails in monorepo workspaces
    missingSuspenseWithCSRBailout: false,
  },
  // Suppress the ENOWORKSPACES error by ignoring the patch step
  env: {
    NEXT_PRIVATE_SKIP_PATCHES: '1',
  },
};
export default nextConfig;

