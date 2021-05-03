import createOrder from '@/lib/create-order'
import stripeSigningSecret from '@/lib/stripe-signing-secret'

export const config = {
  api: {
    bodyParser: false
  }
}

const handler = async (req, res, event) => {
  const permittedEvents = ['checkout.session.completed']
  console.log(req.method)
  // console.log(res)
  console.log(event.type)
  if (req.method === 'POST') {
    if (permittedEvents.includes(event.type)) {
      try {
        switch (event.type) {
          case 'checkout.session.completed':
            console.log(event.data.object.id)
            await createOrder({ sessionId: event.data.object.id })
            res.status(204).json({ message: 'Received' })
            break
          default:
            throw new Error(`Unhandled event: ${event.type}`)
        }
      } catch (error) {
        res.status(500).json({ message: 'Unknown event' })
      }
    }

    
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}

export default stripeSigningSecret(handler)
