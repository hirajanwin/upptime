import { readFile, writeJson, ensureDir } from "fs-extra";
import { safeLoad } from "js-yaml";
import { join } from "path";

export const preProcess = async () => {
  const config = safeLoad(
    await readFile(join("..", ".statusrc.yml"), "utf8")
  ) as {
    logoUrl?: string;
    name?: string;
    introTitle?: string;
    introMessage?: string;
  };
  await ensureDir(join(".", "src", "data"));
  await writeJson(join(".", "src", "data", "config.json"), config);
};

preProcess();