import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider'


const useCart = () => {
    const { user } = useContext(AuthContext);

    const { isLoading, refetch ,data: cart = [] } = useQuery({
        queryKey: ['carts', user?.emil],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`)
            return res.json();
        },
    })

    return [cart, isLoading, refetch]

}
export default useCart  