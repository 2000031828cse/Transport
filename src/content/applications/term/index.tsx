import React, { useState } from 'react';

interface Term {
  termId: number; // Assuming termId is a number
  startDate: string;
  endDate: string;
}

const TermPage: React.FC = () => {
  const [term, setTerm] = useState<Term>({
    termId: 1, // Initial termId
    startDate: '',
    endDate: '',
  });

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    };
    return date.toLocaleDateString('en-US', options);
  };

  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newStartDate = e.target.value;
    setTerm((prevTerm) => ({
      ...prevTerm,
      startDate: newStartDate,
      // Automatically adjust endDate if it's before the new start date
      endDate: prevTerm.endDate < newStartDate ? newStartDate : prevTerm.endDate,
    }));
  };

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEndDate = e.target.value;
    // Check if the selected end date is before the start date
    if (newEndDate >= term.startDate) {
      setTerm({
        ...term,
        endDate: newEndDate,
      });
    } else {
      alert('End date cannot be before the start date.');
    }
  };

  const handleUpdateTerm = () => {
    // Here you can implement the logic to update the term on the server
    // For demonstration, let's just log the term object
    console.log('Updated term:', term);
    // You can add fetch or axios call here to update the term on the server
  };

  return (
    <div>
      <h2>Term Details</h2>
      <div>
        <label>Term ID:</label> {term.termId}
      </div>
      <div>
        <label>Start Date:</label>
        <input type="date" value={term.startDate} onChange={handleStartDateChange} />
      </div>
      <div>
        <label>End Date:</label>
        <input type="date" value={term.endDate} onChange={handleEndDateChange} />
      </div>
      <div>
        <button onClick={handleUpdateTerm}>Update Term</button>
      </div>
      <div>
        <h3>Term Period</h3>
        {term.startDate && term.endDate ? (
          <p>
            <strong>Start Date:</strong> {formatDate(term.startDate)} <br />
            <strong>End Date:</strong> {formatDate(term.endDate)}
          </p>
        ) : (
          <p>Please select start and end dates.</p>
        )}
      </div>
    </div>
  );
};

export default TermPage;
