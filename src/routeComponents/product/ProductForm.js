import background from '../../components/images/backgroundanis/background-signup-01.png'
import './ProductForm.css'

function ProductForm(props) {
  return (
    <form className="mb-5" onSubmit={props.handleSubmit}>
      <img src={background} alt="background" class="bg" />
      <div className="form-group">
        <label htmlFor="productFormName" className="form">Product Name</label>
        <input
          type="text"
          className="form-control"
          id="productFormName"
          name="name"
          onChange={props.handleChange}
          value={props.state.name}
        />
      </div>
      <div className="form-group">
        <label htmlFor="productFormDescription" className="form">Description</label>
        <input
          type="text"
          className="form-control"
          id="productFormDescription"
          name="description"
          onChange={props.handleChange}
          value={props.state.description}
        />
      </div>



      <div className="form-row">
        <div className="form-group">
          <label htmlFor="productGlutenFree" className="form">Glúten Free?</label>
          <input
            type="text"
            className="form-control"
            id="productGlutenFree"
            name="glutenFree"
            onChange={props.handleChange}
            value={props.state.glutenFree}
          />
        </div>

        <div className="form-group">
          <label htmlFor="productFormLactoseFree" className="form">Lactose Free?</label>
          <input
            type="text"
            className="form-control"
            id="productFormLactoseFree"
            name="lactoseFree"
            onChange={props.handleChange}
            value={props.state.lactoseFree}
          />
        </div>

        <div className="form-group">
          <label htmlFor="productFormSugarFree" className="form">Sugar Free?</label>
          <input
            type="text"
            className="form-control"
            id="productFormSugarFree"
            name="sugarFree"
            onChange={props.handleChange}
            value={props.state.sugarFree}
          />
        </div>

        <div className="form-group">
          <label htmlFor="productFormCaseinFree" className="form">Casein Free?</label>
          <input
            type="text"
            className="form-control"
            id="productFormCaseinFree"
            name="caseinFree"
            onChange={props.handleChange}
            value={props.state.caseinFree}
          />
        </div>

        <div className="form-group">
          <label htmlFor="productFormVegan" className="form">Vegan?</label>
          <input
            type="text"
            className="form-control"
            id="productFormVegan"
            name="vegan"
            onChange={props.handleChange}
            value={props.state.vegan}
          />
        </div>
        
      </div>
      <div className="form-row">
        <div className="form-group col">
          <label htmlFor="productFormPrice" className="form">Price</label>
          <input
            type="text"
            className="form-control"
            id="productFormPrice"
            name="price"
            onChange={props.handleChange}
            value={props.state.price}
          />
        </div>

        <div className="form-group">
          <label htmlFor="productFormImage" className="form">Imagem</label>
          <input
            type="file"
            className="form-control boxBorder"
            id="productFormImage"
            name="image_url"
            onChange={props.handleChange}
          />
        </div>

      </div>
      <hr />
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default ProductForm;
