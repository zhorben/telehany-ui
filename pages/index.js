import React from 'react'
import Main from '../src/components/Main'
import Header from '../src/components/Header'
import Designers from '../src/components/Designers'

import client from '../network'

function Home({ designers }) {
  return (
    <Main>
      <Header />

      <div className="wrapper">      
        <h1>Mens Designer Clothes Since 2019</h1>
        <p>
          Mens designer clothes store Zhorben was founded in 2019 with the vision of being the leading Polish designer menswear independent. We are now official stockists of world renowned labels such as Barbour, Belstaff, CP Company, Fred Perry, Stone Island, Vivienne Westwood, Moncler and Y3 to name just a few. We also have a substantial range of mens designer footwear brands from the likes of Adidas Originals, Clarks Originals, Grenson, New Balance and Nike. We have a well-chosen collection of mens accessories from such fashion lines as the iconic Paul Smith and Comme Des Garcons.
        </p>

        <div className="designers">
          <h3>Designers</h3>

          <Designers designers={designers} />
        </div>
      </div>

      <style jsx>{`
        p {
          font-size: 16px;
          line-height: 26px;
          text-align: justify;
        }

        .designers {
          margin: 40px 0;
        }
      `}</style>
      
    </Main>
  )
}

Home.getInitialProps = async () => {
  try {
    const response = await client.get('/api/designers')
    return { designers: response.data.designers }
  } catch (error) {
    return { error: error.response.data.error }
  }
}

export default Home
