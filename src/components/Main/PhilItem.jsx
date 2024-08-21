export default function PhilItem({ title, img }) {
  return (
    <div className='item_in' style={{ background: `url(${img})` }}>
      <strong>{title}</strong>
    </div>
  )
}

