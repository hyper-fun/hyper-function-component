import { randomBytes } from "crypto";
import { readFileSync, statSync } from "fs";
import { tmpdir, homedir } from "os";
import { join } from "path";
import tar from "tar";
import fetch, { FormData, fileFromSync } from "node-fetch";

export async function publish({ token }: { token: string }) {
  const context = process.env.HFC_CLI_CONTEXT || process.cwd();

  const pkgJsonPath = join(context, ".hfc", "build", "pkg", "package.json");

  const pkgJson = JSON.parse(readFileSync(pkgJsonPath, "utf-8"));
  const { description } = pkgJson;

  pkgJson.description = `👉 https://hyper.fun/${pkgJson.hfcName}/${
    pkgJson.version
  }${description ? ` - ${description}` : ""}`;

  let docTarPath;
  let pkgTarPath;
  try {
    [docTarPath, pkgTarPath] = await Promise.all([packDoc(), packHfcPkg()]);
  } catch (error) {
    console.log("failed to pack:", error);
    return;
  }

  const sizeJs = statSync(
    join(context, ".hfc", "build", "pkg", "esm", pkgJson.hfcName + ".js")
  );

  const sizeCss = statSync(join(context, ".hfc", "build", "pkg", "hfc.css"));

  const form = new FormData();
  form.append("token", token!);
  form.append("description", description);
  form.append("manifest", JSON.stringify(pkgJson));
  form.append("sizeJs", sizeJs.size.toString());
  form.append("sizeCss", sizeCss.size.toString());
  form.append("doc", fileFromSync(docTarPath));
  form.append("pkg", fileFromSync(pkgTarPath));

  const publishUrl =
    process.env.NODE_ENV === "production"
      ? "https://api.hyper.fun/hfc/publish"
      : "http://localhost:3000/hfc/publish";

  try {
    await fetch(publishUrl, {
      method: "POST",
      body: form,
    })
      .then((res) => res.json())
      .then((res: any) => {
        if (res.error) {
          console.log(res.message);
          return;
        }

        console.log("publish success");
      });
  } catch (error) {
    console.log("failed to publish, network error");
  }
}

async function packDoc(): Promise<string> {
  const context = process.env.HFC_CLI_CONTEXT || process.cwd();
  const output = join(tmpdir(), randomBytes(8).toString("hex") + ".tar");

  await tar.create(
    {
      cwd: join(context, ".hfc", "build", "doc"),
      file: output,
    },
    ["."]
  );

  return output;
}

async function packHfcPkg(): Promise<string> {
  const context = process.env.HFC_CLI_CONTEXT || process.cwd();
  const output = join(tmpdir(), randomBytes(8).toString("hex") + ".tar.gz");

  await tar.create(
    {
      cwd: join(context, ".hfc", "build"),
      gzip: true,
      file: output,
    },
    ["pkg"]
  );

  return output;
}

export function readToken() {
  let token;
  try {
    token = readFileSync(join(homedir(), ".hfc", "token"), "utf8");
  } catch (error) {}

  return token;
}
