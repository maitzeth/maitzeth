import React from 'react';
import { getYuGiCard } from '../../api';
import { Stack } from '../UI';

const YuGiOhCard = () => {
  const { status, data, refetch } = getYuGiCard();

  const renderContent = () => {
    if (data && status === 'success') {
      return <img src={data.card_images[0]?.image_url} alt={data.name} className="max-w-full h-auto w-40 lg:w-60" />
    }
  }

  return (
    <Stack direction={{ mobile: 'vertical', desktop: 'vertical' }} space={{ mobile: 2, desktop: 2 }}>
      {renderContent()}
      <button
        type="button"
        onClick={() => refetch()}
        className="border border-gray-400 py-2 w-full rounded-lg hover:text-white hover:bg-black-light shadow-lg transition duration-200"
      >
        Get random card
      </button>
    </Stack>
  )
}

export default YuGiOhCard