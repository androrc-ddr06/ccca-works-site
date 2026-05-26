import { Document } from "@/types";

const iconColors = {
  PDF: "text-red-500 bg-red-50",
  DOC: "text-blue-500 bg-blue-50",
  XLSX: "text-green-500 bg-green-50",
};

export function DocumentCard({ doc }: { doc: Document }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-[var(--shadow-card)] flex gap-4 items-start group hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-300">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${iconColors[doc.fileType]}`}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-semibold text-[#1F2937] text-sm">{doc.title}</h3>
          <span className="text-xs text-[#9CA3AF] shrink-0">
            {doc.fileType}
            {doc.fileSize ? ` · ${doc.fileSize}` : ""}
          </span>
        </div>
        <p className="text-xs text-[#6B7280] leading-relaxed mb-3">{doc.description}</p>
        <a
          href={doc.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2B5BA8] hover:text-[#F5A623] transition-colors"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          View document
        </a>
      </div>
    </div>
  );
}
