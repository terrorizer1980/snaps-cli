module.exports = {
  extends: ['@metamask/eslint-config', '@metamask/eslint-config-nodejs'],

  overrides: [
    {
      files: ['**/*.ts'],
      extends: ['@metamask/eslint-config-typescript'],
      env: {
        node: true,
      },
      globals: {
        snaps: true,
      },
    },

    {
      files: ['src/**/*', 'development/**/*'],
      rules: {
        'node/no-process-exit': 'off',
      },
    },

    {
      files: ['src/cmds/eval/evalWorker.ts'],
      globals: {
        lockdown: true,
        Compartment: true,
        BigInt: true,
      },
    },

    {
      files: ['src/main.ts'],
      rules: {
        'node/shebang': 'off',
      },
    },

    {
      files: [
        // Exports a yargs middleware function, which must be synchronous.
        'src/utils/snap-config.ts',
        'src/utils/snap-config.test.ts',
      ],
      rules: {
        'node/no-sync': 'off',
      },
    },

    {
      files: ['examples/**/*.js'],
      env: {
        browser: true,
      },
      globals: {
        wallet: true,
      },
      rules: {
        'no-alert': 'off',
        'import/no-unresolved': 'off',
      },
    },

    {
      files: ['**/*.test.ts'],
      extends: ['@metamask/eslint-config-jest'],
      rules: {
        'node/no-callback-literal': 'off',
      },
    },
  ],

  ignorePatterns: ['!.eslintrc.js', 'dist/', 'node_modules/'],
};
