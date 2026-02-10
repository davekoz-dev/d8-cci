/**
 * Document List Component
 * Displays list of downloadable documents and resources
 */

import * as React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText, Download, Calendar } from 'lucide-react';
import type { Document } from '@/lib/types/d8-cci';
import { cn } from '@/lib/utils';

interface DocumentListProps {
  documents: Document[];
  variant?: 'grid' | 'list';
}

const documentTypeColors = {
  'report': 'bg-[#055090] text-white',
  'communique': 'bg-[#00B3AA] text-white',
  'guideline': 'bg-[#2BB5E9] text-white',
  'research': 'bg-[#282561] text-white',
  'annual-report': 'bg-[#00B9F0] text-white',
};

const documentTypeLabels = {
  'report': 'Report',
  'communique': 'Communiqué',
  'guideline': 'Guideline',
  'research': 'Research',
  'annual-report': 'Annual Report',
};

function DocumentCard({ document }: { document: Document }) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className="p-3 bg-[#F7F8F9] rounded-lg">
          <FileText className="w-6 h-6 text-[#055090]" />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-2">
            <Badge className={cn(documentTypeColors[document.type])}>
              {documentTypeLabels[document.type]}
            </Badge>
            {document.fileSize && (
              <span className="text-xs text-[#414042]">{document.fileSize}</span>
            )}
          </div>

          <h3 className="font-bold text-lg text-[#055090] mb-2 leading-tight">
            {document.title}
          </h3>

          {document.description && (
            <p className="text-sm text-[#414042] mb-3 line-clamp-2">
              {document.description}
            </p>
          )}

          <div className="flex items-center gap-4 mb-3">
            <div className="flex items-center gap-1 text-xs text-[#414042]">
              <Calendar className="w-3 h-3" />
              <span>{document.date}</span>
            </div>
            {document.language && (
              <span className="text-xs text-[#414042]">
                Language: {document.language}
              </span>
            )}
          </div>

          <Button
            asChild
            size="sm"
            variant="outline"
            className="border-[#00B3AA] text-[#00B3AA] hover:bg-[#00B3AA] hover:text-white"
          >
            <Link href={document.fileUrl} target="_blank" rel="noopener noreferrer">
              <Download className="w-4 h-4 mr-2" />
              Download
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  );
}

function DocumentListItem({ document }: { document: Document }) {
  return (
    <div className="flex items-center justify-between gap-4 p-4 border-b border-[#F7F8F9] hover:bg-[#F7F8F9] transition-colors">
      <div className="flex items-start gap-4 flex-1 min-w-0">
        <FileText className="w-5 h-5 text-[#055090] mt-1 flex-shrink-0" />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-medium text-[#055090]">{document.title}</h4>
            <Badge
              variant="outline"
              className="border-[#00B3AA] text-[#00B3AA] shrink-0"
            >
              {documentTypeLabels[document.type]}
            </Badge>
          </div>
          <div className="flex items-center gap-4 text-xs text-[#414042]">
            <span>{document.date}</span>
            {document.fileSize && <span>{document.fileSize}</span>}
            {document.language && <span>{document.language}</span>}
          </div>
        </div>
      </div>
      <Button
        asChild
        size="sm"
        variant="ghost"
        className="text-[#00B3AA] hover:text-[#00B3AA] hover:bg-[#F7F8F9] shrink-0"
      >
        <Link href={document.fileUrl} target="_blank" rel="noopener noreferrer">
          <Download className="w-4 h-4 mr-2" />
          Download
        </Link>
      </Button>
    </div>
  );
}

export function DocumentList({ documents, variant = 'grid' }: DocumentListProps) {
  if (variant === 'list') {
    return (
      <div className="bg-white rounded-lg border border-[#F7F8F9]">
        {documents.map((document) => (
          <DocumentListItem key={document.id} document={document} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {documents.map((document) => (
        <DocumentCard key={document.id} document={document} />
      ))}
    </div>
  );
}
