import { ServerStyleSheets } from "@material-ui/core";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    <Html lang="en">
      <Head></Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>;
  }
}
MyDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPge = ctx.renderPage;
  ctx.renderPage = () => {
    return originalRenderPge({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });
  };
};
