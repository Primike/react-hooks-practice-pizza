import React from "react";

function PizzaForm({selectedPizza, editPizza, changePizza}) {
  return (
    <form onSubmit={changePizza}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={selectedPizza.topping}
            onChange = {(e) => {editPizza(e.target.name, e.target.value)}}
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" value = {selectedPizza.size}
                  onChange = {(e) => {editPizza(e.target.name, e.target.value)}}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              checked={selectedPizza.vegetarian}
              onChange={(e) => {editPizza(e.target.name, true)}}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              checked={!selectedPizza.vegetarian}
              onChange={(e) => {editPizza(e.target.name, false)}}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
