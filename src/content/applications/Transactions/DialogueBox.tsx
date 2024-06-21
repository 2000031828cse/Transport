// ApprovalDialog.tsx or ApprovalDialog.jsx
import { FC, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

interface ApprovalDialogProps {
  open: boolean;
  onClose: () => void;
}

const ApprovalDialog: FC<ApprovalDialogProps> = ({ open, onClose }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSave = () => {
    // Logic to handle saving the input value
    // For example, you can call a function passed from the parent component
    // that manages the state or performs an action with the input value.
    onClose(); // Close the dialog after saving
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Approval Details</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="approval-details"
          label="Enter details"
          type="text"
          fullWidth
          value={inputValue}
          onChange={handleInputChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Approve
        </Button>
        <Button onClick={handleSave} color="primary">
          Reject
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ApprovalDialog;
