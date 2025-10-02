/* This example requires Tailwind CSS v2.0+ */
import * as React from 'react';
import { PrimaryButton } from '../button';
import { Modal } from '../modal';

export interface ConfirmDialogPromptProps {
  isOpen?: boolean;
  title: string;
  description: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

export default function ConfirmDialogPrompt({
  isOpen,
  title,
  description,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  onConfirm,
  onCancel,
}: ConfirmDialogPromptProps) {
  return (
    <Modal
      isOpen={isOpen}
      state="danger"
      title={title}
      message={description}
      actions={
        <PrimaryButton type="button" block color="red" onClick={onConfirm}>
          {confirmText}
        </PrimaryButton>
      }
      closeButtonText={cancelText}
      onClose={onCancel}
    />
  );
}
