import React from 'react';

interface AuditBadgeProps {
  score?: number;
  status?: 'verified' | 'pending' | 'failed';
  className?: string;
}

export const AuditBadge: React.FC<AuditBadgeProps> = ({ 
  score, 
  status = 'pending', 
  className = '' 
}) => {
  const getStatusColor = () => {
    switch (status) {
      case 'verified':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'failed':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    }
  };

  const getStatusText = () => {
    switch (status) {
      case 'verified':
        return 'Verified';
      case 'failed':
        return 'Failed';
      default:
        return 'Pending';
    }
  };

  return (
    <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor()} ${className}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
      {score ? `${getStatusText()} (${score})` : getStatusText()}
    </div>
  );
};
