import React from 'react'

export default function Flashcard({ content, footer, onClick }) {
  const flashCardStyle = 'bg-amber-800 flex flex-col items-center justify-center aspect-[4/5] rounded-lg shadow-card p-4 landscape:h-4/5 portrait:w-4/5 select-none'
  const contentStyle = 'text-[13rem] lg:text-[25rem] font-bold text-gray-300 mb-6'
  const footerStyle = 'text-sm text-gray-400 mt-auto'

  return (
    <div onClick={onClick} className={flashCardStyle}>
      <div className={contentStyle}>
        {content}
      </div>
      <div class={footerStyle}>
        {footer}
      </div>
    </div>
  )
}
