export function parseEnvs() {
	const envs = {};
	if (process.env) {
		for (const [env, value] of Object.entries(process.env)) {
			if (!env.startsWith("APP_")) continue;
			envs[env] = value;
		}
	}
	return envs;
}
