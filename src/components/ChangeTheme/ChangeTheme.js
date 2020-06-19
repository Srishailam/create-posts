import React from 'react'

const THEMES = [
  { primaryColor: 'deepskyblue', secondaryColor: 'coral' },
  { primaryColor: 'orchid', secondaryColor: 'mediumseagreen' },
];

export default function ChangeTheme({ theme, setTheme }) {

  const isActive = (t) => {
    return t.primaryColor === theme.primaryColor && t.secondaryColor === theme.secondaryColor;
  }
  const ThemeItem = ({ theme, active, onClick }) => {
    return (
      <span onClick={onClick} style={{ cursor: 'pointer', paddingLeft: 8, fontWeight: active ? 'bold' : 'normal' }}>
        <span style={{ color: theme.primaryColor }}>Primary</span> / <span style={{ color: theme.secondaryColor }}>Secondary</span>
      </span>
    )
  }
  return (
    <div className="ChangeTheme">
      Change Theme:
      {
        THEMES.map((t, i) =>
          <ThemeItem
            theme={t}
            key={i}
            onClick={() => setTheme(t)}
            active={isActive(t)}
          />
        )
      }
    </div>
  )
}
