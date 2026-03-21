import { useState } from "react";

interface WindowControlsProps {
  isMaximized: boolean;
  onClose: () => void;
  onMinimize: () => void;
  onMaximize: () => void;
}

const WindowControls = ({ isMaximized, onClose, onMinimize, onMaximize }: WindowControlsProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex items-center gap-2"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Red — close */}
      <button
        onClick={onClose}
        className="w-3.5 h-3.5 rounded-full bg-[hsl(0,70%,55%)] hover:bg-[hsl(0,80%,45%)] transition-colors active:scale-90 flex items-center justify-center"
        aria-label="Close"
      >
        {hovered && (
          <svg width="6" height="6" viewBox="0 0 6 6" fill="none">
            <line x1="1" y1="1" x2="5" y2="5" stroke="rgba(0,0,0,0.5)" strokeWidth="1.2" strokeLinecap="round"/>
            <line x1="5" y1="1" x2="1" y2="5" stroke="rgba(0,0,0,0.5)" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
        )}
      </button>

      {/* Yellow — minimize / restore */}
      <button
        onClick={onMinimize}
        className="w-3.5 h-3.5 rounded-full bg-[hsl(45,90%,55%)] hover:bg-[hsl(45,90%,45%)] transition-colors active:scale-90 flex items-center justify-center"
        aria-label="Minimize"
      >
        {hovered && (
          <svg width="6" height="2" viewBox="0 0 6 2" fill="none">
            <line x1="0.5" y1="1" x2="5.5" y2="1" stroke="rgba(0,0,0,0.5)" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
        )}
      </button>

      {/* Green — maximize / restore */}
      <button
        onClick={onMaximize}
        className="w-3.5 h-3.5 rounded-full bg-[hsl(120,55%,48%)] hover:bg-[hsl(120,55%,38%)] transition-colors active:scale-90 flex items-center justify-center"
        aria-label={isMaximized ? "Restore" : "Maximize"}
      >
        {hovered && (
          isMaximized ? (
            <svg width="7" height="7" viewBox="0 0 7 7" fill="none">
              <polyline points="2,0 7,0 7,5" stroke="rgba(0,0,0,0.5)" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
              <polyline points="5,2 0,2 0,7 5,7 5,2" stroke="rgba(0,0,0,0.5)" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg width="7" height="7" viewBox="0 0 7 7" fill="none">
              <line x1="1" y1="6" x2="6" y2="1" stroke="rgba(0,0,0,0.5)" strokeWidth="1.1" strokeLinecap="round"/>
              <polyline points="3.5,1 6,1 6,3.5" stroke="rgba(0,0,0,0.5)" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
              <polyline points="3.5,6 1,6 1,3.5" stroke="rgba(0,0,0,0.5)" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )
        )}
      </button>
    </div>
  );
};

export default WindowControls;
