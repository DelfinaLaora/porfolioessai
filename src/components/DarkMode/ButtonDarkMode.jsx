import { useSelector, useDispatch } from 'react-redux'
import { changeTheme } from '../../features/Theme/ThemeSlice'
import light from '../../assets/soleil.png'
import dark from '../../assets/nuit.png'

function ButtonDark() {
   const themeValue = useSelector((state) => state.theme.theme)
   const htmlDoc = document.documentElement

   if (themeValue === 'light') {
      htmlDoc.classList.remove('dark')
      htmlDoc.classList.add('light')
      localStorage.theme = 'light'
   }
   if (themeValue === 'dark') {
      htmlDoc.classList.add('dark')
      htmlDoc.classList.remove('light')
      localStorage.theme = 'dark'
   }

   return (
      <div className="darkMode">
         <Button
            type="button"
            name="light"
            img={light}
            selectButton={themeValue === 'light'}
         />
         <Button
            type="button"
            name="dark"
            img={dark}
            selectButton={themeValue === 'dark'}
         />
      </div>
   )
}

function Button({ name, img, selectButton }) {
   const dispatch = useDispatch()

   return (
      <div
         className={`button ${selectButton ? 'button-dark' : 'button-light'}`}
         onClick={() => dispatch(changeTheme(name))}
      >
         <img src={img} alt="plage avec ordinateur" />
      </div>
   )
}

export default ButtonDark
