import React from 'react';

export type PlacePredictionsTypes = {
  // eslint-disable-next-line camelcase
  place_id: string
  description: string
}

type SearchResultProps = {
  isPlacePredictionsLoading: boolean
  placePredictions: PlacePredictionsTypes[]
  onSelectLocation: (item: PlacePredictionsTypes) => void
}

const SearchResultComponent = ({
  isPlacePredictionsLoading,
  placePredictions,
  onSelectLocation,
}: SearchResultProps) => (
  <div>
    {!isPlacePredictionsLoading && (
      placePredictions.map((item) => (
        <div
          className="p-2 m-1 bg-gray-100 w-60 hover:bg-gray-300"
          key={item.place_id}
          onClick={() => onSelectLocation(item)}
          onKeyUp={() => {}}
          role="button"
          tabIndex={0}
        >
          {item.description}
        </div>
      ))
    )}
  </div>
);

export default SearchResultComponent;
