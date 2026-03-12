import React, { useState, useEffect } from 'react';
import Header from '../Common/Header';
import Aside from '../Common/Aside';

function HeritageDetail() {
  
  // --- 1. STATE ---
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview'); // overview | media | settings
  const [isSaving, setIsSaving] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [lastSaved, setLastSaved] = useState("Just now");
  
  // Upload Simulation State
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  // Form Data
  const [data, setData] = useState({
    name: "Taj Mahal",
    location: "Agra, Uttar Pradesh",
    status: "Published",
    priceIndian: 50,
    priceForeigner: 1100,
    description: "The Taj Mahal is an ivory-white marble mausoleum on the southern bank of the river Yamuna in the Indian city of Agra.",
    gallery: [
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=300&q=80"
    ]
  });

  // --- 2. EFFECTS (Simulate Real-time Data Fetching) ---
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500); 
  }, []);

  // --- 3. HANDLERS ---
  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setShowToast(true);
      setLastSaved(new Date().toLocaleTimeString());
      setTimeout(() => setShowToast(false), 3000);
    }, 1200);
  };

  const handleSimulateUpload = () => {
    setIsUploading(true);
    setUploadProgress(0);
    
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setIsUploading(false);
        setData(prev => ({
          ...prev,
          gallery: [...prev.gallery, "https://images.unsplash.com/photo-1598324789736-48616011f078?auto=format&fit=crop&w=300&q=80"]
        }));
      }
    }, 200);
  };

  const handleRemoveImage = (index) => {
    if(window.confirm("Delete this image?")) {
      setData(prev => ({
        ...prev,
        gallery: prev.gallery.filter((_, i) => i !== index)
      }));
    }
  };

  return (
    <div className="admin-dashboard-wrapper">
      <Aside />
      <div className="main-content">
        <Header />

        <div className="admin-page-body">
          
          {/* --- ADMIN HEADER SECTION --- */}
          <div className="admin-header-section" style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <div className="title-area">
              <h2>
                <i className="fa fa-monument"></i> {isLoading ? 'Loading...' : data.name}
              </h2>
              <p>Manage details, media, and pricing for this heritage site.</p>
            </div>
            
            {/* Header Actions */}
            <div className="header-actions-inline" style={{display:'flex', gap:'10px', alignItems:'center'}}>
              <span style={{fontSize:'12px', color:'#666', marginRight:'10px'}}>
                <i className="fa fa-clock-o"></i> Saved: {lastSaved}
              </span>
               <button className="btn-save" onClick={handleSave} disabled={isSaving}>
                {isSaving ? <i className="fa fa-spinner fa-spin"></i> : <i className="fa fa-save"></i>}
                &nbsp; Save Changes
              </button>
            </div>
          </div>

          {/* --- TABS (Matches Location Manager) --- */}
          <div className="admin-tabs-container">
            <button 
              className={activeTab === 'overview' ? 'tab-btn active' : 'tab-btn'} 
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button 
              className={activeTab === 'media' ? 'tab-btn active' : 'tab-btn'} 
              onClick={() => setActiveTab('media')}
            >
              Media Gallery
            </button>
            <button 
              className={activeTab === 'settings' ? 'tab-btn active' : 'tab-btn'} 
              onClick={() => setActiveTab('settings')}
            >
              Pricing & Status
            </button>
          </div>

          {/* --- MANAGEMENT CARD (Single Container for Content) --- */}
          <div className="management-card">
            
            {isLoading ? (
               <div className="fade-in" style={{padding:'40px', textAlign:'center', color:'#999'}}>
                  <i className="fa fa-circle-o-notch fa-spin fa-3x"></i>
                  <p style={{marginTop:'15px'}}>Loading heritage details...</p>
               </div>
            ) : (
              <>
                {/* ========================================= */}
                {/* OVERVIEW TAB                            */}
                {/* ========================================= */}
                {activeTab === 'overview' && (
                  <div className="fade-in">
                    <div className="card-header"><h3>Basic Information</h3></div>
                    
                    <div style={{padding:'20px'}}>
                      <div className="form-group" style={{marginBottom:'20px'}}>
                        <label className="form-label" style={{display:'block', marginBottom:'8px', fontWeight:'600'}}>Site Name</label>
                        <input 
                          type="text" 
                          name="name" 
                          className="form-control" // Assuming standard bootstrap-like or global input class
                          style={{width:'100%', padding:'10px', border:'1px solid #ddd', borderRadius:'4px'}}
                          value={data.name} 
                          onChange={handleInputChange} 
                        />
                      </div>

                      <div className="form-group" style={{marginBottom:'20px'}}>
                        <label className="form-label" style={{display:'block', marginBottom:'8px', fontWeight:'600'}}>Location</label>
                        <input 
                          type="text" 
                          name="location" 
                           style={{width:'100%', padding:'10px', border:'1px solid #ddd', borderRadius:'4px'}}
                          value={data.location} 
                          onChange={handleInputChange} 
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label" style={{display:'block', marginBottom:'8px', fontWeight:'600'}}>Description</label>
                        <textarea 
                          rows="6" 
                          name="description" 
                          style={{width:'100%', padding:'10px', border:'1px solid #ddd', borderRadius:'4px', resize:'vertical'}}
                          value={data.description} 
                          onChange={handleInputChange}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                )}

                {/* ========================================= */}
                {/* MEDIA TAB                               */}
                {/* ========================================= */}
                {activeTab === 'media' && (
                  <div className="fade-in">
                    <div className="card-header"><h3>Photo Gallery</h3></div>
                    
                    <div style={{padding:'20px'}}>
                      <div className="gallery-grid">
                        {data.gallery.map((img, idx) => (
                          <div key={idx} className="gallery-item" style={{position:'relative', display:'inline-block', margin:'10px'}}>
                            <img 
                              src={img} 
                              alt="Heritage" 
                              style={{width:'150px', height:'100px', objectFit:'cover', borderRadius:'8px'}} 
                            />
                            <button 
                              onClick={() => handleRemoveImage(idx)}
                              style={{position:'absolute', top:'5px', right:'5px', background:'rgba(255,0,0,0.8)', border:'none', borderRadius:'50%', width:'24px', height:'24px', color:'#fff', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center'}}
                            >
                              <i className="fa fa-times" style={{fontSize:'12px'}}></i>
                            </button>
                          </div>
                        ))}
                        
                        {/* Upload Button Box */}
                        <div 
                          className="upload-zone" 
                          onClick={handleSimulateUpload}
                          style={{width:'150px', height:'100px', border:'2px dashed #ccc', borderRadius:'8px', display:'inline-flex', flexDirection:'column', alignItems:'center', justifyContent:'center', cursor:'pointer', margin:'10px', verticalAlign:'top'}}
                        >
                           {isUploading ? (
                              <>
                                <i className="fa fa-spinner fa-spin" style={{color:'#666'}}></i>
                                <span style={{fontSize:'10px', marginTop:'5px'}}>{uploadProgress}%</span>
                              </>
                           ) : (
                              <>
                                <i className="fa fa-plus" style={{color:'#ccc', fontSize:'24px'}}></i>
                                <span style={{fontSize:'12px', color:'#999', marginTop:'5px'}}>Add Photo</span>
                              </>
                           )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* ========================================= */}
                {/* SETTINGS (PRICING & STATUS) TAB         */}
                {/* ========================================= */}
                {activeTab === 'settings' && (
                  <div className="fade-in">
                    <div className="card-header"><h3>Pricing & Configuration</h3></div>
                    
                    <div style={{padding:'20px'}}>
                      
                      {/* Grid for two columns inside the card */}
                      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'30px'}}>
                        
                        {/* Column 1: Status */}
                        <div>
                          <h4 style={{borderBottom:'1px solid #eee', paddingBottom:'10px', marginBottom:'15px', color:'#555'}}>Visibility</h4>
                          <div className="form-group">
                            <label className="form-label" style={{display:'block', marginBottom:'8px', fontWeight:'600'}}>Publish Status</label>
                            <select 
                              name="status" 
                              value={data.status} 
                              onChange={handleInputChange}
                              style={{width:'100%', padding:'10px', border:'1px solid #ddd', borderRadius:'4px'}}
                            >
                              <option>Published</option>
                              <option>Draft</option>
                              <option>Archived</option>
                            </select>
                            <p style={{fontSize:'12px', color:'#888', marginTop:'5px'}}>
                              Current status: 
                              <span style={{color: data.status==='Published'?'green':'#888', fontWeight:'bold', marginLeft:'5px'}}>
                                {data.status}
                              </span>
                            </p>
                          </div>
                        </div>

                        {/* Column 2: Pricing */}
                        <div>
                           <h4 style={{borderBottom:'1px solid #eee', paddingBottom:'10px', marginBottom:'15px', color:'#555'}}>Ticket Pricing</h4>
                           <div className="form-group" style={{marginBottom:'15px'}}>
                            <label className="form-label" style={{display:'block', marginBottom:'8px', fontWeight:'600'}}>Indian Citizen (₹)</label>
                            <input type="number" name="priceIndian" value={data.priceIndian} onChange={handleInputChange} style={{width:'100%', padding:'10px', border:'1px solid #ddd', borderRadius:'4px'}} />
                          </div>
                          <div className="form-group">
                            <label className="form-label" style={{display:'block', marginBottom:'8px', fontWeight:'600'}}>Foreigner (₹)</label>
                            <input type="number" name="priceForeigner" value={data.priceForeigner} onChange={handleInputChange} style={{width:'100%', padding:'10px', border:'1px solid #ddd', borderRadius:'4px'}} />
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
          
        </div>
      </div>

      {/* --- TOAST --- */}
      {showToast && (
        <div className="toast-container" style={{position:'fixed', bottom:'20px', right:'20px', background:'#fff', padding:'15px 25px', borderRadius:'8px', boxShadow:'0 5px 15px rgba(0,0,0,0.1)', borderLeft:'4px solid #059669', animation:'slideIn 0.3s ease'}}>
          <div style={{display:'flex', alignItems:'center', gap:'10px'}}>
            <i className="fa fa-check-circle" style={{color:'#059669', fontSize:'20px'}}></i>
            <div>
              <h4 style={{margin:0, fontSize:'14px', color:'#333'}}>Success</h4>
              <span style={{fontSize:'12px', color:'#666'}}>Changes saved successfully.</span>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default HeritageDetail;