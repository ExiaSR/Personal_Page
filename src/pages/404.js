import React from 'react'
import Layout from '../components/layout'
import Contact from '../components/contact'

const NotFoundPage = () => (
  <Layout>
    <section className="hero is-light is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">PAGE NOT FOUND</h1>
          <Contact />
        </div>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
