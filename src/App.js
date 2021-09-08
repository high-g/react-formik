import { Formik, Field } from 'formik'
import styled from '@emotion/styled'
import * as Yup from 'yup'

const validation = () => {
  return Yup.object().shape({
    email: Yup.string().email('メールアドレスの形式で入力してください').required('必須項目'),
    password: Yup.string().required('必須項目です'),
  })
}

const Input = ({ name }) => (
  <Field name={name}>
    {({ field, form: { errors } }) => (
      <div>
        <input {...field} />
        <Error>{errors[name]}</Error>
      </div>
    )}
  </Field>
)

const App = () => {
  return (
    <div>
      <h1>formik test</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validation()}
        onSubmit={(values) => console.log(values)}
        onChange={(values) => console.log(values)}
        render={({ values, errors, handleSubmit, handleChange }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label>email</label>
              <Input name="email" />
            </div>
            <div>
              <label>password</label>
              <Input name="password" />
            </div>
            <button type="submit">送信</button>
          </form>
        )}
      />
    </div>
  )
}

const Error = styled.span`
  color: red;
`

export default App
