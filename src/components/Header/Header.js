import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/contexts';

export default function Header({ text }) {
  const { primaryColor } = useContext(ThemeContext)
  return (
    <div className="Header">
      <h1 style={{ color: primaryColor }}>{text}</h1>
    </div>
  )
}
