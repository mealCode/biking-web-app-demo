import React from 'react';

import Input from 'components/Shared/Input';

type SearchRecordProps = {
  onFilterRecord: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchTerm: string;
};

const SearchRecordComponent = ({ onFilterRecord, searchTerm }: SearchRecordProps) => (
  <div className="my-4 text-sm text-gray-500 font-medium">
    <div>Search notes</div>
    <div>
      <Input type="text" name="search" value={searchTerm} onChange={onFilterRecord} />
    </div>
  </div>
);

export default SearchRecordComponent;
