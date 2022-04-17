import React from 'react'

const Footer = ({length}) => {

  const data_acesso =  new Date(Date.now());

  return (
    <footer>
        Quantity: {length}
        <p>Data do acesso: {data_acesso.toString()}</p>
    </footer>
  )
}

export default Footer;