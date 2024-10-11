"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { ArrowLeft, Search } from 'lucide-react'
import { mockOrders } from '@/lib/mockData'

export default function CustomerOrderPage() {
  const [orderId, setOrderId] = useState('')
  const [order, setOrder] = useState(null)
  const [deliveryOption, setDeliveryOption] = useState('')
  const [error, setError] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const foundOrder = mockOrders.find(o => o.id.toLowerCase() === orderId.toLowerCase())
    if (foundOrder) {
      setOrder(foundOrder)
      setError('')
    } else {
      setOrder(null)
      setError('No order found with the provided ID.')
    }
  }

  const handleDeliveryOptionChange = (value: string) => {
    setDeliveryOption(value)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/">
        <Button variant="ghost" size="sm" className="mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
        </Button>
      </Link>
      <h1 className="text-3xl font-bold mb-6">Find Your Order</h1>
      <form onSubmit={handleSearch} className="mb-8">
        <div className="flex flex-col sm:flex-row gap-4">
          <Input
            type="text"
            placeholder="Enter your order ID (e.g., ORD001)"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            className="flex-grow"
          />
          <Button type="submit" className="w-full sm:w-auto">
            <Search className="mr-2 h-4 w-4" /> Search
          </Button>
        </div>
      </form>

      {error && (
        <p className="text-red-500 mb-4">{error}</p>
      )}

      {order && (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Order Details</CardTitle>
          </CardHeader>
          <CardContent>
            <p><strong>Order ID:</strong> {order.id}</p>
            <p><strong>Customer:</strong> {order.customer}</p>
            <p><strong>Total:</strong> ${order.total.toFixed(2)}</p>
            <p><strong>Status:</strong> {order.status}</p>
          </CardContent>
        </Card>
      )}

      {order && order.status === 'Processing' && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Choose Delivery Option</h2>
          <div className="space-y-4">
            <Label htmlFor="delivery-option">Delivery Option</Label>
            <Select onValueChange={handleDeliveryOptionChange} value={deliveryOption}>
              <SelectTrigger>
                <SelectValue placeholder="Select delivery option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="standard">Standard Delivery (3-5 business days)</SelectItem>
                <SelectItem value="express">Express Delivery (1-2 business days)</SelectItem>
                <SelectItem value="same-day">Same Day Delivery</SelectItem>
              </SelectContent>
            </Select>
            {deliveryOption && (
              <Button className="w-full">Confirm Delivery Option</Button>
            )}
          </div>
        </div>
      )}

      {order && order.status !== 'Processing' && (
        <p className="text-muted-foreground">Delivery option selection is not available for this order.</p>
      )}
    </div>
  )
}