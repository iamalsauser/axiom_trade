import React from 'react';
import { AuditBadge } from '../atoms/audit-badge';

interface AuditCellProps {
  score?: number;
  status?: 'verified' | 'pending' | 'failed';
  lastAuditDate?: string;
  className?: string;
}

export const AuditCell: React.FC<AuditCellProps> = ({ 
  score, 
  status = 'pending',
  lastAuditDate,
  className = '' 
}) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <AuditBadge score={score} status={status} />
      {lastAuditDate && (
        <span className="text-xs text-gray-500">
          {formatDate(lastAuditDate)}
        </span>
      )}
    </div>
  );
};
