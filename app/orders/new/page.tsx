"use client"

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft } from 'lucide-react'

export default function NewOrderPage() {
  const router = useRouter()
  const [orderData, setOrderData] = useState({
    customer: '',
    total: '',
    status: 'Pending'
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setOrderData(prev => ({ ...prev, [name]: value }))
  }

  const handleStatusChange = (value: string) => {
    setOrderData(prev => ({ ...prev, status: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('New order:', orderData)
    // Here you would typically send the data to your backend
    // For now, we'll just redirect to the orders page
    router.push('/orders')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/orders">
        <Button variant="ghost" size="sm" className="mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
      </Link>
      <h1 className="text-3xl font-bold mb-6">New Order</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="customer">Customer Name</Label>
          <Input
            id="customer"
            name="customer"
            value={orderData.customer}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="total">Total Amount</Label>
          <Input
            id="total"
            name="total"
            type="number"
            step="0.01"
            value={orderData.total}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="status">Status</Label>
          <Select onValueChange={handleStatusChange} defaultValue={orderData.status}>
            <SelectTrigger>
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Pending">Pending</SelectItem>
              <SelectItem value="Processing">Processing</SelectItem>
              <SelectItem value="Shipped">Shipped</SelectItem>
              <SelectItem value="Delivered">Delivered</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button type="submit" className="w-full">Create Order</Button>
      </form>
    </div>
  )
}