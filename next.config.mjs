import withPWAInit from '@ducanh2912/next-pwa';

/** @type {import('next').NextConfig} */
const withPWA = withPWAInit({
    dest: 'public',
    cacheOnFrontEndNav : true,
    aggresiveFrontEndNavCaching : true,
    reloadOnOnline : true,
    swcMinify : true,
    disable : false,
    register : true,
    workboxOptions: {
        disableDevLogs: true,
    },
    sw: "sw.js"
})

const nextConfig = {};

export default withPWA(nextConfig);
