import React, { useState } from 'react'
import { Button } from 'antd'
export default function () {
  const [name, setName] = useState('小明')
  return (
    <Button>{name}</Button>
  )
}