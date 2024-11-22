// pages/_document.tsx
import { Metadata } from 'next';
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  	metadata: Metadata = {
	title: "Kinsley's Portfolio",
	description: "My internship portfolio about my experience"
	};

	
  render() {
    return (
      <Html lang="en">
        <Head title="Kinsley's Portfolio"> 
		</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
