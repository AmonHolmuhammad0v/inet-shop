import { Link, useNavigate } from "react-router"
import AuthLayout from "../layouts/AuthLayout"
import { Paths } from "../routes/paths"
import { useForm, SubmitHandler } from "react-hook-form"
import CustomInput from "../components/UI/CustomInput"
import { IRegister } from "../types"
import { useRegisterMutation } from "../services/user"
import { errorMes } from "../utils/errorMess"
import { useState } from "react"


// abd2   
// abd@abd.ru
// Abdulla123
const Register = () => {
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
  } = useForm<IRegister>({mode: 'onChange'})
  const password = watch('password')
  const navigate = useNavigate()
  const registerMutation = useRegisterMutation()
  const registerUser: SubmitHandler<IRegister> = async (data) => {
    try {
      await registerMutation.mutateAsync(data)
      console.log('Регистрация прошла успешно!')
      navigate(Paths.login);
      setErr('')
    } catch (error) {
      setErr('')
      setErr(errorMes(error));
    }
    reset();
  }
  
  return (
    <AuthLayout>
      <div className="enter">
        <h1 className="enter__title">Регистрация</h1>
        <form action="" className="enter__form" onSubmit={handleSubmit(registerUser)}>
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
              label='Ваше имя'
              holder='Имя'
              type='text'
            />

          <CustomInput 
            register={register('email', {
                    required: {
                        value: true,
                        message: 'Поле обязательно для заполнения'
                    },
                    minLength: {
                        value: 6,
                        message: 'Не меньше 6 символов'
                    },
                })}
              errors={errors.email}
              label='Ваша почта'
              holder='Почта'
              type='email'
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
              holder='Ваш пароль'
              type='password'
            />

          <CustomInput 
            register={register('password2', {
                    required: {
                        value: true,
                        message: 'Поле обязательно для заполнения'
                    },
                    minLength: {
                        value: 8,
                        message: 'Не меньше 8 символов'
                    },
                    validate: (val)=> val == password || 'Пароли не совпадают'
                })}
              errors={errors.password2}
              label='Повторите пароль'
              holder='Повторите пароль'
              type='password'
            />
          
          <button disabled={!isValid} className="enter__btn">Зарегистрироваться</button>
        </form>
        <div className="enter__info">
          {err && <h3 className="enter__error">{err}</h3>}
          <p className="enter__desc">Есть аккаунт?</p>
          <Link to={Paths.login} className="enter__link">Войти</Link>
        </div>
      </div>
    </AuthLayout>
  )
}

export default Register