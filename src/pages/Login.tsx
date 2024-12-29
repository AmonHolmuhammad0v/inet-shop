import { Link, useNavigate } from 'react-router'
import AuthLayout from '../layouts/AuthLayout'
import { Paths } from '../routes/paths'
import CustomInput from '../components/UI/CustomInput'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ILogin, IRegister } from '../types'
import { useState } from 'react'
import { useLoginMutation, useRegisterMutation } from '../services/user'
import { errorMes } from '../utils/errorMess'

const Login = () => {
  const [err, setErr] = useState('');
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { 
      errors,
      isValid
    },
  } = useForm<ILogin>({mode: 'onChange'})
  const password = watch('password')
  const navigate = useNavigate()
  const loginMutation = useLoginMutation()
  const loginUser: SubmitHandler<ILogin> = async (data) => {
    try {
      await loginMutation.mutateAsync(data)
      console.log('Авторизация прошла успешно!')
      navigate(Paths.menu);
      setErr('')
    } catch (error) {
      setErr('')
      setErr(errorMes(error, 'login '));
    }
    reset();
  }
  return (
    <AuthLayout>
         <div className="enter">
        <h1 className="enter__title">Вход</h1>
        <form action="" className="enter__form" onSubmit={handleSubmit(loginUser)}>
          <CustomInput 
            register={register('username', {
                    required: {
                        value: true,
                        message: 'Поле обязательно для заполнения'
                    },
                    minLength: {
                        value: 2,
                        message: 'Не меньше двух букв'
                    },
                })}
              errors={errors.username}
              label='Ваше логин'
              holder='Логин'
              type='text'
            />


          <CustomInput  
            register={register('password', {
                    required: {
                        value: true,
                        message: 'Поле обязательно для заполнения'
                    },
                    minLength: {
                        value: 8,
                        message: 'Не меньше 8 символов'
                    },
                })}
              errors={errors.password}
              label='Ваш пароль'
              holder='Пароль'
              type='password'
            />

          
          <button disabled={!isValid} className="enter__btn">Логин</button>
        </form>
        <div className="enter__info">
          {err && <h3 className="enter__error">{err}</h3>}
          <p className="enter__desc">Нет акканута?</p>
          <Link to={Paths.register} className="enter__link">Зарегистрироваться</Link>
        </div>
      </div>
    </AuthLayout>
  )
}

export default Login