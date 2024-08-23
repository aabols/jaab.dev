import React from 'react'
import Flashcards from './flashcards'

import { Flashcard } from '@/../db/models'

const getFlashcards = async () => {
  const cards = await Flashcard.findAll()
  return cards.map(c => c.toJSON())
}

export default async function FlashcardPage() {
  const cards = await getFlashcards()

  return (
    <div className='h-full flex flex-col justify-center items-center p-10'>
      <Flashcards cards={cards} />
    </div>
  )
}
