import React, { useEffect } from 'react'
import { Table } from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import { getPost } from '../../store/fetchSlice'




function PostPage() {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.fetchReducer.posts)


    useEffect(() => {
        dispatch(getPost())
    }, [])


  return (
      <div>
          {console.log(posts)}
      <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>id</th>
          <th>Title</th>
          <th>Body</th>
          <th>Действие</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </Table>
    </div>
  )
}

export default PostPage
