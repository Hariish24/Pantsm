import React from 'react';
import './InventoryForm.css';

const InventoryForm = () => {
  return (
    <div className="inventory-container">
      <div className="header">
        <h2>New Inventory Item</h2>
        <div className="buttons">
          <button className="btn draft">Save as Draft</button>
          <button className="btn publish">Save & Publish</button>
        </div>
      </div>

      <div className="form-section">
        <div className="form-group">
          <label></label>
          <input type="text" placeholder="Enter product name" />
        </div>

        <div className="form-group">
          <label></label>
          <select>
            <option>Select Category</option>
            {/* Add options here */}
          </select>
        </div>

        <div className="form-group">
          <label>Selling Price</label>
          <input type="number" placeholder="Enter selling price" />
        </div>

        <div className="form-group">
          <label></label>
          <input type="number" placeholder="Enter cost price" />
        </div>

        <div className="form-group">
          <label></label>
          <input type="number" placeholder="Enter quantity" />
        </div>

        <div className="form-group">
          <label></label>
          <select>
            <option>Select Order Type</option>
            {/* Add options here */}
          </select>
        </div>

        <div className="form-group">
          <label>Discount</label>
          <input type="checkbox" />
        </div>

        <div className="form-group">
          <label>Expiry Date</label>
          <input type="date" />
        </div>

        <div className="form-group">
          <label>Short Description</label>
          <textarea placeholder="Enter short description"></textarea>
        </div>

        <div className="form-group">
          <label></label>
          <textarea placeholder="Enter detailed description"></textarea>
        </div>

        <div className="form-group">
          <label>Upload Image</label>
          <div className="upload-box">
            <span>Upload Image</span>
          </div>
        </div>

        <div className="form-group additional-images">
          <label></label>
          <div className="upload-box">
            <span>Upload Image</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryForm;
