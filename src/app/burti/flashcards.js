'use client'
import React, { useEffect, useState } from 'react'
import { shuffleArray } from '@/app/utils'
import Flashcard from './flashcard'

export default function Flashcards({ cards }) {
  // STATES
  const [deck, setDeck] = useState()
  const [index, setIndex] = useState()


  // EFFECTS
  useEffect(() => {
    if (!cards) return
    if (index && index < cards.length) return
    setDeck(shuffleArray(cards))
  }, [cards, index])

  useEffect(() => {
    setIndex(0)
  }, [deck])


  // HANDLERS
  const handleNext = (e) => { setIndex(i => i + 1) }


  // COMPONENT
  if (!deck || !deck[index]) return null

  return (
    <Flashcard content={deck[index].caption} footer={`${index + 1} / ${deck.length}`} onClick={handleNext} />
  )
}
