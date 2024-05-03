import withPWAInit from '@ducanh2912/next-pwa';

/** @type {import('next').NextConfig} */
const withPWA = withPWAInit({
    dest: 'public',
    cacheOnFrontEndNav : true,
    aggresiveFrontEndNavCaching : true,
    reloadOnOnline : true,
    swcMinify : true,
    disable : false,
    workboxOptions: {
        disableDevLogs: true,
    }
})

const nextConfig = {};

export default withPWA(nextConfig);
