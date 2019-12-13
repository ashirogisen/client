import React from 'react'
// import { useHistory } from 'react-router-dom'
import './style.scss'

function EditBook (props) {

  // const history = useHistory()

  return (
    <div className="mb-5 mt-2">
      <p className="add-book-title">Edit Book</p>
      <form>
        <div className="form-group">
          <input className="form-control" type="text" placeholder="Title"/>
        </div>
        <div className="form-group">
          <input className="form-control" type="text" placeholder="Author"/>
        </div>
        <div className="form-group">
          <input className="form-control" type="text" placeholder="Category"/>
        </div>
        <div className="form-group">
          <input className="form-control" type="number" placeholder="Rating max 5.0"/>
        </div>
        <div className="form-group">
          <input className="form-control" type="number" placeholder="Price"/>
        </div>
        <div className="form-group">
          <input className="form-control" type="number" placeholder="Stock"/>
        </div>
        <div className="form-group">
          <textarea className="form-control" rows="3" placeholder="Description"></textarea>
        </div>
        <div className="input-group mb-3">
          <div className="custom-file">
            <input type="file" className="custom-file-input" id="inputGroupFile03" aria-describedby="inputGroupFileAddon03"/>
            <label className="custom-file-label" for="inputGroupFile03">Choose image for edit</label>
          </div>
        </div>
        <button type="submit" className="btn btn-green mr-2">Submit</button>
        <button className="btn btn-salmon">Reset</button>
      </form>
        <img alt="book" className="mt-3" width="100%" src="http://books.google.com/books/content?id=kztrAwAAQBAJ&printsec=frontcover&img=1&zoom=3&edge=curl&imgtk=AFLRE71WwjdniapJBEWl3Q0tTYm0Sh_dbGyY-TReSX-FaZnLx2wNDsv7UnmUkPfTFALS2GplAZ1GO5Ajlzsd2rrJF6IyS8g3mmEFLMwCnpHMDPt2MW7KsAt9649hHq6ezl569JzO9ooK&source=gbs_api" />
    </div>
  )
}

export default EditBook