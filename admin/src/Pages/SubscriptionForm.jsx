import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../Common/Header';
import Aside from '../Common/Aside';

function SubscriptionForm() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Check if we passed data (Edit Mode) or not (Create Mode)
  const isEditMode = location.state && location.state.plan;
  
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    duration: '3 Day',
    description: '',
    status: 'Active'
  });

  // Load data if editing
  useEffect(() => {
    if (isEditMode) {
      setFormData(location.state.plan);
    }
  }, [isEditMode, location.state]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to save to backend would go here
    alert(`Successfully ${isEditMode ? 'Updated' : 'Created'} Plan: ${formData.name}`);
    navigate(-1); // Go back to the list page
  };

  return (
    <div className="wrapper">
      <Aside />
      <div className="main-content admin-main-content">
        <Header />
        
        <div className="admin-body">
          
          {/* Header with Back Button */}
          <div className="page-header">
            <div className="page-title" style={{display:'flex', alignItems:'center', gap:'15px'}}>
              <button onClick={() => navigate(-1)} style={{background:'none', border:'none', fontSize:'18px', cursor:'pointer'}}>
                <i className="fa fa-arrow-left"></i>
              </button>
              <div>
                <h2>{isEditMode ? 'Edit Subscription Plan' : 'Create New Plan'}</h2>
                <p>Fill in the details below to {isEditMode ? 'update the' : 'add a new'} pricing tier.</p>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="table-card" style={{padding:'30px', maxWidth:'800px'}}>
            <form onSubmit={handleSubmit}>
              
              {/* Row 1 */}
              <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'20px', marginBottom:'20px'}}>
                <div>
                  <label className="form-label" style={{display:'block', marginBottom:'8px', fontWeight:'bold'}}>Plan Name</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    required 
                    placeholder="e.g. Royal Walk"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    style={{width:'100%', padding:'12px', borderRadius:'5px', border:'1px solid #ddd'}}
                  />
                </div>
                <div>
                  <label className="form-label" style={{display:'block', marginBottom:'8px', fontWeight:'bold'}}>Price (₹)</label>
                  <input 
                    type="number" 
                    className="form-control" 
                    required 
                    placeholder="0.00"
                    value={formData.price}
                    onChange={(e) => setFormData({...formData, price: e.target.value})}
                    style={{width:'100%', padding:'12px', borderRadius:'5px', border:'1px solid #ddd'}}
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'20px', marginBottom:'20px'}}>
                <div>
                  <label className="form-label" style={{display:'block', marginBottom:'8px', fontWeight:'bold'}}>Duration</label>
                  <select 
                    className="form-control"
                    value={formData.duration}
                    onChange={(e) => setFormData({...formData, duration: e.target.value})}
                    style={{width:'100%', padding:'12px', borderRadius:'5px', border:'1px solid #ddd', backgroundColor:'white'}}
                  >
                    <option>1 Day</option>
                    <option>3 Days</option>
                    <option>Weekly Pass</option>
                    <option>Lifetime Access</option>
                  </select>
                </div>
                <div>
                  <label className="form-label" style={{display:'block', marginBottom:'8px', fontWeight:'bold'}}>Status</label>
                  <select 
                    className="form-control"
                    value={formData.status}
                    onChange={(e) => setFormData({...formData, status: e.target.value})}
                    style={{width:'100%', padding:'12px', borderRadius:'5px', border:'1px solid #ddd', backgroundColor:'white'}}
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
              </div>

              {/* Description */}
              <div style={{marginBottom:'30px'}}>
                <label className="form-label" style={{display:'block', marginBottom:'8px', fontWeight:'bold'}}>Description / Features</label>
                <textarea 
                  rows="5"
                  className="form-control" 
                  placeholder="List the features included in this plan..."
                  style={{width:'100%', padding:'12px', borderRadius:'5px', border:'1px solid #ddd', fontFamily:'inherit'}}
                ></textarea>
                <small style={{color:'#888'}}>This will be displayed on the public booking page.</small>
              </div>

              {/* Actions */}
              <div style={{display:'flex', gap:'15px', paddingTop:'20px', borderTop:'1px solid #eee'}}>
                <button type="submit" style={{padding:'12px 30px', border:'none', background:'#3498db', color:'white', borderRadius:'5px', cursor:'pointer', fontSize:'16px'}}>
                  {isEditMode ? 'Update Plan' : 'Create Plan'}
                </button>
                <button type="button" onClick={() => navigate(-1)} style={{padding:'12px 30px', border:'1px solid #ddd', background:'white', borderRadius:'5px', cursor:'pointer', fontSize:'16px'}}>
                  Cancel
                </button>
              </div>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default SubscriptionForm;