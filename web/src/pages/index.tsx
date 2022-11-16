import Image from 'next/image';
import appPreviewImg from '../assets/app-nlw-copa-preview.png';
import logoImg from '../assets/logo.svg';
import userAvatarExampleImg from '../assets/users-avatares-examples.png';
import iconCheckIgm from '../assets/icon-check.svg';

export default function Home() {
  return (
    <div>
      <main>
        <Image src={logoImg} alt='nlw copa'/>

        <h1> Crie seu próprio bolão da copa e compartilhe entre amigos!</h1>

        <div>
          <Image src={userAvatarExampleImg} alt=""/>
          <strong>
            <span>+12.592</span> pessoas já estão usando
          </strong>
        </div>

        <form>
          <input type="text" required placeholder='Qual nome do seu bolão?' />
          <button type='submit'>Criar meu bolão</button>
        </form>

        <p>Após criar seu bolão, você recebera um código único que poderá usar para convidar outras pessoas</p>

        <div>
          <div>
            <Image src={iconCheckIgm} alt=''/>
            <div>
              <span>+2.034</span>
              <span>Bolão criados</span>
            </div>
          </div>

          <div>
          <Image src={iconCheckIgm} alt=''/>
            <div>
              <span>+2.034</span>
              <span>Bolão criados</span>
            </div>
          </div>
        </div>
        
      </main>
      <Image
       src={appPreviewImg}
       alt="Dois celulares exibindo uma previa da aplicação móvel do nlw copa" 
       quality={100}
       />
    </div>
  )
}

// export const getServerSideProps = async()=>{
//   const response = await fetch('http://localhost:3333/pools/count')
//   const data = await response.json();

//   console.log(data)
//   return {
//     props:{
//       count:data.pools
//     }
//   }
// }
