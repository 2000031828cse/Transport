import { FC, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { PassOrderStatus } from 'src/models/pass_request';

interface ApprovalDialogProps {
  open: boolean;
  onClose: () => void;
  onSave: (status: PassOrderStatus) => void;
}

const ApprovalDialog: FC<ApprovalDialogProps> = ({ open, onClose, onSave }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleApprove = () => {
    onSave('completed');
  };

  const handleReject = () => {
    onSave('rejected');
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
        <Button onClick={handleApprove} color="primary">
          Approve
        </Button>
        <Button onClick={handleReject} color="primary">
          Reject
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ApprovalDialog;
