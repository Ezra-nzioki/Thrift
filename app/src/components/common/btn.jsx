import React from 'react'

export const Btn = (props) => {
  const { text } = props  
  return (
    <div class="flex justify-center">
        <button class="mt-6 px-5 py-1 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition ">
          {text}
        </button>
    </div>
  )
}
