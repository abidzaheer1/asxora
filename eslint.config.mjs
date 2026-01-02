import next from "eslint-config-next";

const config = [
  {
    ignores: ["node_modules/**", ".next/**", "out/**", "build/**", "next-env.d.ts"],
  },
  ...next,
];

export default config;
