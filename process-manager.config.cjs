module.exports = {
    apps: [
        {
            name: 'boilerplate-backend-api-server',
            script: './dist/apps/backend/main.js',
            watch: true,
            time: true,
            instances: 1,
            log_date_format: 'YY.MM.DD HH:mm Z',
            ignore_watch: ['.git', '.DS_Store', 'node_modules'],
            env_dev: {
                name: 'dev-boilerplate-backend-api-server',
                NODE_ENV: 'dev',
            },
            env_staging: {
                name: 'staging-boilerplate-backend-api-server',
                NODE_ENV: 'staging',
                watch: false,
            },
        },
    ],
};
