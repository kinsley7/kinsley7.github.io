'use client';
import { IComponent } from "../IComponent";
import { Document, Page} from "react-pdf";
import { useState } from "react";
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

interface PDFViewerProps extends IComponent{
	url : string;
}


export const PDFViewer = ({url}:PDFViewerProps) => {
	
	const [numPages, setNumPages] = useState<number>();
	const [pageNumber, setPageNumber] = useState<number>(1);

	function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
	setNumPages(numPages);
	}


	return (
		<div>
		<Document file={url} onLoadSuccess={onDocumentLoadSuccess}>
			<Page pageNumber={pageNumber} />
		</Document>
		<p>
			Page {pageNumber} of {numPages}
		</p>
		</div>
	);
	}