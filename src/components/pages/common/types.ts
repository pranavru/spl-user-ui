export type Modal = {
  title: string;
  description: string;
  onConfirm: () => void;
  onCancel: () => void;
}