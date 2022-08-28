import './index.scss'

export const FormInput = ({ label, ...props }) => (
  <div className="group">
    <input className="form-input" {...props} />
    {label && (
      <label
        className={`form-input-label ${
          props.value.length ? 'shrink' : ''
        }`}
      >
        Display Name
      </label>
    )}
  </div>
)
