import fs from 'fs';
import path from 'path';

const nativeJsPath = path.resolve('node_modules', 'rollup', 'dist', 'native.js');

if (fs.existsSync(nativeJsPath)) {
  let content = fs.readFileSync(nativeJsPath, 'utf8');
  if (!content.includes('@rollup/wasm-node')) {
    content = content.replace(
      "if (error instanceof Error && error.code === 'ERR_DLOPEN_FAILED') {\n\t\t\tthrow error;\n\t\t}",
      "if (error instanceof Error && error.code === 'ERR_DLOPEN_FAILED') {\n\t\t\ttry {\n\t\t\t\treturn require('@rollup/wasm-node/dist/native.js');\n\t\t\t} catch (_) {\n\t\t\t\tthrow error;\n\t\t\t}\n\t\t}"
    );
    fs.writeFileSync(nativeJsPath, content, 'utf8');
    console.log('Successfully applied Rollup WASM fallback patch for Windows Application Control environments.');
  }
}
