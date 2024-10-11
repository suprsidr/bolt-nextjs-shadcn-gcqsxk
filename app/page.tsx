import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Package, Plus, Search } from 'lucide-react'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Order Management</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link href="/orders">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Package className="mr-2" />
                View Orders
              </CardTitle>
              <CardDescription>Check and manage existing orders</CardDescription>
            </CardHeader>
          </Card>
        </Link>
        <Link href="/orders/new">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Plus className="mr-2" />
                New Order
              </CardTitle>
              <CardDescription>Create a new order</CardDescription>
            </CardHeader>
          </Card>
        </Link>
        <Link href="/customer">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Search className="mr-2" />
                Find Your Order
              </CardTitle>
              <CardDescription>Look up your order and choose delivery options</CardDescription>
            </CardHeader>
          </Card>
        </Link>
      </div>
    </div>
  )
}