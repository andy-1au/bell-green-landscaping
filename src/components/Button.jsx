export default function Button({ children, variant = 'green', href, onClick, type = 'button', className = '' }) {
  const cls = `btn btn--${variant}${className ? ' ' + className : ''}`
  if (href) return <a href={href} className={cls}>{children}</a>
  return <button type={type} className={cls} onClick={onClick}>{children}</button>
}
