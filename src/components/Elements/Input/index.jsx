import React from 'react'
import Input from './Input'
import Label from './Label'

export default function InputForm(props) {

  const { name, label, type, placeholder } = props;

  return (
    <div className="mb-6">
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} type={type} placeholder={placeholder} />
      {/* jika tidak memiliki props children bisa dituliskan dengan langsung menambahkan slice closing tag */}
    </div>
  )
}
