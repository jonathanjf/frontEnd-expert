import { useRouter } from 'next/router';

const Descobrir = () => {
  const router = useRouter()
  const city = router.query.city;

  return (<h1>{city}</h1>)
}

export default Descobrir;