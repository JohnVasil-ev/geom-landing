import { utils } from "./config/index.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
	env: utils.parseEnvs(),
};

export default nextConfig;
