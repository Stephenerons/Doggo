"use client"
import React, { useEffect, useState } from 'react'

export default function Calculator() {

  const [dogName, setDogName] = useState('')
  const [timeFrame, setTimeFrame] = useState('')
  const [ageFigure, setAgeFigure]= useState(0)
  const [breedType, setBreedType]= useState('')
  const [formValidity, setFormValidity]= useState(false)
  const [finalResult, setFinalResult] = useState(0)

  const breedsAndLifespans =[
    { "breed":"Labrador Retriever",
      "lifespan" : 13
    },

    { "breed":"German Shepherd",
      "lifespan" : 14
    },

    { "breed":"Golden Retriever",
      "lifespan" : 12
    },

    { "breed":"Bulldog",
      "lifespan" : 10
    },

    { "breed":"Beagle",
      "lifespan" : 15
    },

    { "breed":"Poodle",
      "lifespan" : 18
    },

    { "breed":"Yorkshire Terrier",
      "lifespan" : 16
    },

    { "breed":"Boxer",
      "lifespan" : 12
    },

    { "breed":"Dachshund",
      "lifespan" : 16
    },

    { "breed":"Siberian Husky",
      "lifespan" : 14
    },

    { "breed":"Chihuahua",
      "lifespan" : 20
    },

    { "breed":"Caucasian Shepherd",
      "lifespan" : 12
    },

    { "breed":"Doberman Pinscher",
      "lifespan" : 12
    },

    { "breed":"Chow Chow",
      "lifespan" : 15
    },

    { "breed":"Lhasa Apso",
      "lifespan" : 15
    },

    { "breed":"American Eskimo Dog",
      "lifespan" : 15
    },

    { "breed":"Pit Bull",
      "lifespan" : 15
    },

    { "breed":"Boerboel",
      "lifespan" : 11
    },
 
  ]

  const formValidation = () => {
    dogName !== '' &&  ageFigure !== 0 && breedType !== 'Select Breed' && timeFrame !== 'Select duration' ? setFormValidity(true) : setFormValidity(false) 
  }

  const dogNameApplier = (event) => {
    setDogName(event.target.value)
  }

  const timeDuration = (event) => {
    setTimeFrame(event.target.value)
  } 

  const ageValueApplier = (event) => {
    setAgeFigure(event.target.value)
  }

  const dogBreed = (event) => {
    setBreedType(event.target.value)
  }



  const removeDefaultSubmitBehaviour = (event) => {
    event.preventDefault()
    formValidation()
  }

  // const calculatedAge = () => {
  //   setFinalResult(!true)
  // }
  // useEffect(() => {
  //   setIsClient(true);
  // }, []);

  useEffect(() =>{

    const selectedBreed = breedType
    
    const converted = timeFrame === 'Months' ?  ageFigure / 12 : ageFigure

      const filteredBreed = breedsAndLifespans.filter(specie => selectedBreed === specie.breed)
      const filteredLifespan = breedsAndLifespans.find(specie => specie.breed === selectedBreed )

      let lifespan
      filteredLifespan ? lifespan = filteredLifespan.lifespan : 'null'

      let newLifeSpan = 'null'
       if (filteredLifespan) {

        newLifeSpan = filteredLifespan.lifespan;
        console.log(newLifeSpan);
      }
       else {
        console.log("Select a breed");
      }
      
      console.log(converted)
      console.log(filteredBreed)
      console.log(filteredLifespan)
      console.log(newLifeSpan)
      console.log(breedType)
    

      const calculateDogAgeToHuman = ()  => {
        const result = converted * newLifeSpan
        return Math.round(result)
      }
      const printResult = calculateDogAgeToHuman()
      setFinalResult(printResult)


  }, [breedType,timeFrame,ageFigure])


  //  const buttonConditions = () => {
  //   coverterd !== 0 
  //  }



  return (
    <main>
      {/* hero section starts */}
      <section >
        {/* hero container containing image and overlay for large and small screen starts */}
        <div className='md:w-full md:h-screen md:bg-retriever md:bg-no-repeat md:bg-cover md:relative w-full h-[50vh] bg-retriever_mobile bg-cover bg-no-repeat relative '>

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
             Let&apos;s head down to the calculator
          </p>

        </div>
        {/* text overlay ends  */}
        
      </section>
      {/* hero section ends */}


      {/* main content section */}
      <section className='max-w-7xl mx-auto'>
        <form action="" onSubmit={removeDefaultSubmitBehaviour} className=' md:mx-[6.25rem] mx-4'>

            <div className='md:flex md:flex-col md:justify-center md:items-center md:mt-32 flex flex-col justify-center items-center mt-14 '>

              <h2 className='md:text-[40px] md:text-[#EF5615] md:font-semibold text-xl text-center font-semibold text-[#EF5615] '>Calculator</h2>

              {/* name content starts here  */}
              <div className='md:flex md:flex-col cursor-pointer md:justify-center md:items-center md:mt-8 flex flex-col justify-center items-center mt-8'>
                <label className='md:text-2xl md:font-normal text-base font-semibold ' htmlFor="name"> What&apos;s your Dog&apos;s name ?</label>

                <input className='md:mt-6 md:border md:border-[#EF5615] md:rounded-md md:p-3 md:w-[216px] md:text-center mt-4 text-center border border-[#EF5615] rounded-md p-2 w-16 ' type="text" placeholder='Name' name="" value={dogName} required onChange={dogNameApplier} id="name" />
              </div>
              {/* name content ends here  */}

            </div>

            <div className='md:mt-10 md:flex md:flex-col md:justify-center md:items-center md:pb-14 pb-10 mt-4 flex flex-col justify-center items-center'>
              <p className='md:text-2xl md:font-normal text-sm font-light'>Modify the duration and breed to acquire age </p>

              <div className='md:flex md:flex-col md:justify-between md:items-start md:gap-10 md:mt-6 flex flex-col justify-between items-center mt-8'>

                <div className='md:flex md:flex-row md:items-start flex flex-col items-center md:justify-between justify-between w-full'>
                    {/* container holding month and years starts */}
                    <div className='md:flex md:flex-col md:items-start  md:gap-4 flex flex-col items-center gap-4'>

                      <input type="text" className='md:border cursor-pointer md:border-[#EF5615] md:rounded-md md:h-fit md:w-[113px] md:p-3 md:text-center w-[95px] p-2 border border-[#EF5615] rounded-md text-center ' onChange={ageValueApplier} required value={ageFigure}  name="" id="" />

                      {/* months and years starts here  */}
                      <select className='md:border cursor-pointer md:border-[#EF5615] md:rounded-md md:h-fit md:w-fit md:p-3 md:text-center  w-fit p-2 border    border-[#EF5615] rounded-md text-center' required onChange={timeDuration} name="" id="">
                        <option  value="">Select duration</option>
                        <option  value="Months">Months</option>
                        <option value="Years">Years</option>
                      </select>
                      {/* months and years ends here  */}

                    </div>
                    {/* container holding month and years ends */}

                    {/* breeds starts here  */}
                    <select className='md:border cursor-pointer md:border-[#EF5615] md:rounded-md md:w-fit md:h-fit md:p-3 md:mt-0 border mt-8 border-[#EF5615] rounded w-fit p-2 ' onChange={dogBreed}  required  name="" id="">

                      <option className='' value="">Select Breed</option>
                      <option value="Labrador Retriever">Labrador Retriever</option>
                      <option value="German Shepherd">German Shepherd</option>
                      <option value="Golden Retriever">Golden Retriever</option>
                      <option value="Bulldog">Bulldog</option>
                      <option value="Beagle">Beagle</option>
                      <option value="Poodle">Poodle</option>
                      <option value="Yorkshire Terrier">Yorkshire Terrier</option>
                      <option value="Boxer">Boxer</option>
                      <option value="Dachshund">Dachshund</option>
                      <option value="Siberian Husky">Siberian Husky</option>
                      <option value="Chihuahua">Chihuahua</option>
                      <option value="Caucasian Shepherd">Caucasian Shepherd</option>
                      <option value="Doberman Pinscher">Doberman Pinscher</option>
                      <option value="Chow Chow">Chow Chow</option>
                      <option value="Lhasa Apso">Lhasa Apso</option>
                      <option value="HuskyAmerican Eskimo Dog">American Eskimo Dog</option>
                      <option value="Pit Bull">Pit Bull</option>
                      <option value="Boerboel">Boerboel</option>

                    </select>
                    {/* breed ends here  */}
                </div>

            {/* final output starts here */}
            <div className={formValidity === true ? '': 'hidden md:hidden' }>
              <div className='md:flex md:justify-center md:items-center flex justify-center items-center mt-0'>
                <div className='md:flex md:flex-col md:justify-center md:items-center text-center'>

                    <h2 className='md:text-4xl text-xl'>{` ${dogName}'s age in human years is`} <span className='md:text-5xl text-4xl text-[#EF5615] md:text-[#EF5615]'>{finalResult}</span> </h2>
                </div>
              </div>
            </div>
            {/* final output ends here */}

                {/* calculate button starts here */}
                <button type='submit'  className=''>
                    <input className='md:p-3 md:w-[95px] md:h-[43px] md:rounded-md md:bg-[#0E1530] md:border md:border-[#EF5615] md:text-base md:text-white cursor-pointer md:text-center md:mt-0 p-2 w-fit mt-6 rounded bg-[#0E1530] text-xs text-white' type="submit" value="Calculate" />
                </button>
                {/* calculate button ends here */}

              </div>


            </div> 



        </form>
      </section>
      {/* main content section */}
    </main>
  )
}
