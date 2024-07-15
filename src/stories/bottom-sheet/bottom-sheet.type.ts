export interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  closeOnClickOutside?: boolean;
  fullHeight?: boolean;
}
