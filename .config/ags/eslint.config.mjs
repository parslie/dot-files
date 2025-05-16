import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import prettier from "eslint-config-prettier";
import { includeIgnoreFile } from "@eslint/compat";
import { fileURLToPath, URL } from "node:url";

const gitignorePath = fileURLToPath(new URL("./.gitignore", import.meta.url));

export default tseslint.config(
	includeIgnoreFile(gitignorePath),
	eslint.configs.recommended,
	tseslint.configs.recommended,
	prettier
);
