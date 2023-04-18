import '../../App.css';
import { useEffect, useState } from 'react';
import Filter from '../../components/Filter/Filter';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import Tweets from '../../components/Tweets/Tweets'
import Loading from '../../components/Loading/Loadind'

function UsersPage() {
  const [users, setUsers] = useState([])
  const [error, setError] = useState(null)
  const [page, setPage] = useState(1)
  const [fetching, setFetching] = useState(true)
  const [loading, setLoading] = useState(false)
  const [isDownloadMore, setIsDownloadMore] = useState(false)
  const [filter, setFilter] = useState(100500)
  

  async function getFilter(){
    setUsers([]);
    console.log("UsersPage ~ filter1:", filter)
    try{
      setLoading(true)
      const API_URL = `https://64399a0d90cd4ba563ea4cb1.mockapi.io/users?follovers=${filter}&limit=10&page=${page}`;
      const response = await fetch(API_URL);
      const data = await response.json();
      setUsers([...data]);
      setLoading(false)
    }catch(err){
      setError(err);
    }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function getUsers(){
    try{
      setLoading(true)
      const API_URL = `https://64399a0d90cd4ba563ea4cb1.mockapi.io/users?limit=10&page=${page}`;
      const response = await fetch(API_URL);
      const data = await response.json();
      isDownloadMore? setUsers([...users,...data]) :setUsers([...data]) ;
      setLoading(false)
    }catch(err){
      setLoading(false)
      setError(err);
    }
  }

  useEffect(() =>{
    if(fetching){
      getUsers();
    }
    setFetching(false)
    setIsDownloadMore(false)
  },[fetching, getUsers]);
  
  function onClickPage() {
    setIsDownloadMore(true)
    setPage(prevState => prevState + 1);
    setFetching(true);
  }

    const handleChange = e =>  {
    e.preventDefault()
    let count = 0;
    e.target.dataset.follovers === '100500'? count=100501 : count=100500;
    fetch('https://64399a0d90cd4ba563ea4cb1.mockapi.io/users/'+e.target.id, {
    method: 'PUT',
    headers: {'content-type':'application/json'},
    body: JSON.stringify({follovers: count})
    }).then(res => {
    if (res.ok) {
      return res.json();
    }
    }).then(res => {
      getUsers();
    }).catch(err => {
      setError(err);
})
}
const onClickShowFollov = (e)=>{
  e.preventDefault()
  setFilter(100500);
  getFilter();
}
const onClickShowFollowings = (e)=>{
  e.preventDefault()
  setFilter(100501);
  getFilter();
}

  return (
    <div className='container'>
      <Filter name='show all' onClick={getUsers}/>
      <Filter name='show follov' onClick={onClickShowFollov}/>
      <Filter name='followings' onClick={onClickShowFollowings}/>
      {error && 
      <ErrorMessage error={error.message}/> }      
      {!fetching &&
      <Tweets users={users} handleChange={handleChange} />}
      {loading && <Loading/>}
      
      {(users.length <= 49 & users.length > 0) && 
      <Filter name='Download more' onClick={onClickPage}/>}
    </div>
  );
}

export default UsersPage;