import Link from 'next/link'
import React from 'react'
import {BiSolidBone} from 'react-icons/bi'
import {PiDogFill} from 'react-icons/pi'


export default function Page() {
  return (
    <main className=''>
      {/* hero section starts */}
      <section>
        {/* hero container containing image and overlay for large and small screen starts */}
        <div className='md:w-full md:h-screen md:bg-home md:bg-no-repeat md:bg-cover md:relative w-full h-[50vh] bg-home bg-cover bg-no-repeat relative '>

        </div>

        {/* overlay starts */}
        <div className='md:w-full md:h-screen md:absolute md:inset-0 md:bg-[#31333B] md:opacity-40 w-full h-[50vh] absolute inset-0 bg-[#31333B] opacity-40'>
        </div>
        {/* overlay stops */}

        {/* text overlay starts  */}
        <div className='md:absolute md:w-full md:h-screen md:inset-0 md:flex   md:flex-col md:justify-center md:items-center absolute inset-0 flex flex-col justify-center items-center w-full h-[50vh]'>

          <h1 className='md:text-[2.5rem] md:font-semibold md:w-[601px]  md:text-center md:text-white text-[1.25rem] font-semibold text-center text-white'>
            Calculate your dog&apos;s human age equivalent with ease
          </h1>

          <p className='md:text-xl md:font-light md:w-[39rem] md:text-center md:text-white md:pt-4  text-sm font-light text-center text-white pt-6 w-[20.5rem]'>
          Welcome to our dog age calculator! Simply enter your dog&apos;s age and we&apos;ll calculate their human age equivalent. It&apos;s a fun and informative way to understand your furry friend&apos;s age in human years.
          </p>

          <Link href='/calculator'>
            <button className='md:mt-8 mt-4'>
              <p className='md:p-3  md:text-white md:bg-[#0E1530] md:rounded-lg md:border md:border-[#EF5615] p-[10px] bg-[#0E1530] rounded-lg border border-[#EF5615] text-white'>
              Lets calculate
              </p>
            </button>
          </Link>

        </div>
        {/* text overlay ends  */}
        
      </section>
      {/* hero section ends */}



      {/* body section starts here  */}
      <section className='max-w-7xl mx-auto'>

        <div className='md:mx-[6.25rem] mx-4 md:mt-32 mt-8'>

          {/* content 1 of main starts here  */}

          {/* large screen article 1 starts */}
          <article className='hidden md:block'>

            <div className='md:h-fit md:w-full  md:flex'>

            <div className='md:w-1/2 h-[36.563rem] md:bg-black_gsd md:bg-cover md:bg-no-repeat rounded-md'></div>

            {/* text content starts here */}
            <div className='md:w-[33rem]  md:pl-6 flex flex-col justify-center items-center'>
              <h2 className='md:text-[2.5rem] md:font-semibold md:text-[#EF5615]'>Discover Your Dog&apos;s Age in Human Years</h2>

              <p className='md:text-xl md:font-light md:pt-10'>
                Find out how old your dog is in human years and gain a better understanding of their life stage.
              </p>

              <div className=' md:mt-14 md:flex md:gap-6'>
                <div className='md:flex md:flex-col md:justify-center md:items-center md:w-1/2 md:gap-4'>
                  <span className='md:text-[#EF5615] md:text-2xl'> <BiSolidBone />
                  </span>

                  <h2 className='md:text-2xl md:font-medium'>Why Calculate</h2>
                  <p className='md:text-base md:font-light'> Understanding your dog&apos;s age can help you provide the best care.
                  </p>
                </div>

                <div className='md:flex md:flex-col md:justify-center md:items-center md:w-1/2 md:gap-4'>
                  <span className='md:text-[#EF5615] font md:text-2xl'><PiDogFill /></span>
                  <h2 className='md:text-2xl md:font-medium'>
                    How it works
                  </h2>
                  
                  <p className=' md:text-base md:font-light'> Enter your dog&apos;s age and find out their equivalent human age.
                  </p>


                </div>
              </div>

            </div>
            {/* text content ends here */}

            </div>
          </article>
          {/* large screen article 1 ends */}

          {/* small screen article 1 starts */}
          <article className='md:hidden sm:block mt-10'>
            <div className='h-fit w-full flex flex-col justify-center items-center '>
              <div className=''>
                <h1 className='text-xl text-center font-semibold text-[#EF5615]'>Discover Your Do&apos;s Age in Human Years
                </h1>
                <p className='text-sm font-light pt-4'>
                  Find out how old your dog is in human years and gain a better understanding of their life stage.
                </p>
              </div>

              <div className='flex flex-col justify-center items-center mt-8'>
                <div className='flex items-center gap-3'>
                  <h2 className='text-base font-semibold'> Why Calculate
                  </h2>

                  <span className='text-[#EF5615] md:text-lg'>
                    <BiSolidBone />
                  </span>

                </div>
                  <p className='text-sm text-center font-light mt-4'>
                    Understanding your dog&apos;s age can help you provide the best care.
                  </p>

                <div className='flex items-center gap-3 mt-8'>
                  <h2 className='text-base font-semibold'> How it works
                  </h2>

                  <span className='text-[#EF5615] md:text-lg'>
                    <BiSolidBone />
                  </span>

                </div>
                  <p className='text-sm text-center font-light mt-4'>
                    Enter your dog&apos;s age and find out their equivalent human age.
                  </p>
                
              </div>

            
              <div className='w-full h-[22.75rem] bg-black_gsd bg-cover bg-no-repeat mt-14'></div>
              

            </div>
          </article>
          {/* small screen article 1 ends */}

          {/* content 1 of main ends here  */}




          {/* content 2 of main starts here  */}

          {/* large screen article 2 starts */}
          <article className='hidden md:block'>
            <div className='md:h-fit md:w-full  md:flex md:mt-32'>

              {/*text part starts */}
              <div className='md:w-1/2 fit'>

                <div>
                  <h1 className='md:text-[2.5rem] md:font-semibold md:text-[#EF5615]'>Unravel the Enigma of Canine Aging: Discover Your Dog&apos;s True Human Age
                  </h1>

                  <p className='md:text-base md:font-light md:pt-10'>
                    Embark on a journey to demystify your loyal companion&apos;s age and unearth the secrets hidden within their life stages. Unveil the intricacies of canine aging, transcending the conventional norms. Delve into a realm where your furry friend&apos;s years are measured in a unique tapestry, revealing a captivating story of resilience and vitality.
                  </p>
                </div>
              </div>
              {/*text part ends */}

              {/* image part starts */}
              <div className='md:pl-6'>

                <div className='md:w-[33rem] h-[36.563rem] md:bg-nerd md:bg-cover md:bg-no-repeat md:rounded-md '></div>
              </div>
              {/* image part ends */}

            </div>
          </article>
          {/* large screen article 2 stops */}


          {/* small screen article 2 starts */}
          <article className='md:hidden block mt-14'>
            <div>
              <h1 className='text-xl text-center font-semibold text-[#EF5615]'>
                Unravel the Enigma of Canine Aging: Discover Your Dog&apos;s True Human Age
              </h1>

              <p className='text-sm font-light pt-4 text-center'>
                Embark on a journey to demystify your loyal companion&apos;s age and unearth the secrets hidden within their life stages. Unveil the intricacies of canine aging, transcending the conventional norms. Delve into a realm where your furry friend&apos;s years are measured in a unique tapestry, revealing a captivating story of resilience and vitality.
              </p>

              <div className='mt-6'>
                <div className=' h-[22.75rem] bg-nerd bg-cover bg-no-repeat'></div>
              </div>
            </div>
          </article>
          {/* small screen article 2 stops */}

          {/* large screen article 2 stops */}

          {/* content 2 of main ends here  */}



          {/* content 3 of main ends here  */}
          {/* large screen article 2 starts */}
          <article className='hidden md:block'>


            <div className='md:h-fit md:w-full md:flex md:mt-32'>

              {/* image part starts */}
              <div className='md:w-1/2 '>
                <div className=' w-[33rem] h-[36.563rem] md:bg-dope md:bg-cover md:bg-no-repeat '>

                </div>
              </div>

              <div className=' pl-6'>
                <h1 className='md:text-[2.5rem] md:font-semibold md:text-[#EF5615]'>
                  Decode the First Two Years: A Pup&apos;s Odyssey
                </h1>
                <p className='md:text-base md:font-light md:pt-10'>
                  In the nascent stages of life, your dog&apos;s age is a canvas painted with vibrant hues. Small breeds unfold their story through a lens of 12.5 human years per month, while the playful medium-sized companions dance to the rhythm of 10.5 human years per month. Majestic giants, the large breeds, carve their tale with 9 human years per month. Uncover the magic of their puppyhood, a journey where every moment is a stepping stone to a world of boundless energy.
                </p>

              </div>

            </div>
          </article>
          {/* large screen article 3 stops */}



          {/* small screen article 3 starts */}
          <article className='md:hidden block mt-14'>
            <div>
              <h1 className='text-xl text-center font-semibold text-[#EF5615]'>
                Decode the First Two Years: A Pup&apos;s Odyssey
              </h1>

              <p className='text-sm font-light pt-4 text-center'>
                In the nascent stages of life, your dog&apos;s age is a canvas painted with vibrant hues. Small breeds unfold their story through a lens of 12.5 human years per month, while the playful medium-sized companions dance to the rhythm of 10.5 human years per month. Majestic giants, the large breeds, carve their tale with 9 human years per month. Uncover the magic of their puppyhood, a journey where every moment is a stepping stone to a world of boundless energy.
              </p>

              <div className='mt-6'>
                <div className=' h-[22.75rem] bg-dope bg-cover bg-no-repeat'></div>
              </div>
            </div>
          </article>
          {/* small screen article 3 starts */}

          {/* content 3 of main ends here  */}

          {/* content 4 of main starts here  */}
          <article className='hidden md:block'>
            <div className='md:h-fit md:w-full  md:flex md:mt-32'>

              {/*text part starts */}
              <div className='md:w-1/2 fit'>

                <div>
                  <h1 className='md:text-[2.5rem] md:font-semibold md:text-[#EF5615]'>Unlock the Canine Chronometer: Seek Guidance from the Vet Oracle
                  </h1>

                  <p className='md:text-base md:font-light md:pt-10'>
                    In this quest for understanding, consult the wise oracle of veterinary expertise. Your veterinarian, the guardian of health and wisdom, holds the key to deciphering your dog&apos;s age with unparalleled precision. Through their insights, the age-old mystery of canine aging finds its resolution.

                    Embark on this mystical journey, where the secrets of dog aging are illuminated, and your companion&apos;s age is unveiled in a tapestry of unique and enchanting tales. Let the age-old bond between human and canine flourish in the light of newfound understanding.
                  </p>
                </div>
              </div>
              {/*text part ends */}

              {/* image part starts */}
              <div className='md:pl-6'>

                <div className='md:w-[33rem] h-[36.563rem] md:bg-vet md:bg-cover md:bg-no-repeat '></div>
              </div>
              {/* image part ends */}

            </div>
          </article>
          
          <article className='md:hidden block mt-14'>
            <div>
              <h1 className='text-xl text-center font-semibold text-[#EF5615]'>
                Unlock the Canine Chronometer: Seek Guidance from the Vet Oracle
              </h1>

              <p className='text-sm font-light pt-4 text-center'>
              In this quest for understanding, consult the wise oracle of veterinary expertise. Your veterinarian, the guardian of health and wisdom, holds the key to deciphering your dog&apos;s age with unparalleled precision. Through their insights, the age-old mystery of canine aging finds its resolution.

              Embark on this mystical journey, where the secrets of dog aging are illuminated, and your companion&apos;s age is unveiled in a tapestry of unique and enchanting tales. Let the age-old bond between human and canine flourish in the light of newfound understanding.
              </p>

              <div className='mt-6'>
                <div className=' h-[22.75rem] bg-vet bg-cover bg-no-repeat'></div>
              </div>
            </div>
          </article>
          {/* content 4 of main ends here  */}

        
        </div>

        {/* final content starts here  */}
        <div className='md:flex md:h-[158px] md:flex-row md:justify-center md:items-start md:mx-[6.25rem] md:gap-6 md:mt-[7.75rem] md:mb-16 mx-4 gap-6 mt-14 mb-8 flex flex-col justify-center items-center'>

              <div className='md:w-1/3 w-full'>
                <h2 className='md:text-2xl md:w-fit md:text-start text-[#EF5615] text-base md:font-medium font-medium  md:text-[rgb(239,86,21) text-center w-80 '>Understanding the Age Calculation Algorithm</h2>

                <p className='md:text-base md:font-light md:pt-6 text-sm font-light pt-4 md:text-start text-center'>Knowing your dog&apos;s age in human years allows you to tailor their diet, exercise, and healthcare to ensure they live a long and healthy life.</p>

              </div>


              <div>
                <h2 className='md:text-2xl md:text-start md:w-fit md:font-medium md:text-[#EF5615]  text-center text-[#EF5615] text-base  font-medium  md:text-[rgb(239,86,21)'>How Does It Work?</h2>
                <p className='md:text-base md:font-light md:pt-6 text-sm font-light pt-4 md:text-start text-center'>Our age calculation process is simple and straightforward.</p>
              </div>

              <div>
                <h2 className='md:text-2xl md:text-start md:font-medium md:text-[#EF5615] text-center text-[#EF5615] text-base font-medium  '>Discover Your Dog&apos;s Real Age</h2>
                <p className='md:text-base md:font-light md:pt-6 text-sm font-light pt-4 md:text-start text-center'>Uncover the true age of your furry friend with our accurate age calculation tool.</p>
              </div>
        </div>
        {/* final content ends here  */}

      </section>

      {/* body section ends here  */}
    </main>
  )
}
