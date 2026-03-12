import React, { useEffect, useState } from "react";
import api from "../utils/AxiosConfig"; 
import Aside from '../Common/Aside';
import Header from '../Common/Header';

function AdminManageGuide() {
  // --- 1. STATE & SCHEMA MAPPING ---
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState('list'); 
  const [isSaving, setIsSaving] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState("");

  // Matches your API: heritage_id, language, audio_path, video_path, status
  const defaultForm = { 
    _id: null, 
    heritage_id: '', 
    language: 'English', 
    audio_path: '', 
    video_path: '', 
    status: 'ACTIVE' 
  };
  const [formData, setFormData] = useState(defaultForm);

  // --- 2. STANDARDIZED FETCHING ---
  async function FetchData() {
    try {
      // API call using your config
      let response = await api.get("/guides/all"); 
      setData(response.data.data || []);
      setLoading(false);
    } catch (error) {
      console.log("Fetch Error:", error);
      setLoading(false);
    }
  }

  useEffect(() => {
    FetchData();
  }, []);

  // --- 3. CRUD HANDLERS ---
  const handleSave = async () => {
    if(!formData.heritage_id || !formData.language) {
      return alert("Heritage ID and Language are required.");
    }

    setIsSaving(true);
    try {
      if (formData._id) {
        await api.put(`/guides/edit/${formData._id}`, formData);
        finalizeSave("Guide Updated Successfully");
      } else {
        await api.post('/guides/add', formData);
        finalizeSave("New Guide Created");
      }
    } catch (err) {
      setIsSaving(false);
      console.log("Save Error:", err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Permanently delete this multimedia guide?")) {
      try {
        await api.delete(`/guides/remove/${id}`);
        setData(data.filter(g => g._id !== id));
        triggerToast("Guide Deleted");
      } catch (err) { console.log("Delete Error:", err); }
    }
  };

  const finalizeSave = (msg) => {
    setIsSaving(false);
    triggerToast(msg);
    FetchData(); 
    setTimeout(() => setView('list'), 1500);
  };

  const triggerToast = (msg) => {
    setToastMsg(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <div className="wrapper">
      <Aside />
      <div className="main-content admin-main-content">
        <Header />
        <div className="admin-body fade-in">

          {view === 'list' ? (
            <>
              <div className="page-header">
                <div className="page-title">
                  <h2><i className="fa fa-headphones"></i> Multimedia Guides</h2>
                  <p>Managing {data.length} language-specific audio/video tracks.</p>
                </div>
                <button className="btn btn-primary" onClick={() => { setFormData(defaultForm); setView('form'); }}>
                  <i className="fa fa-plus"></i> Add New Guide
                </button>
              </div>

              <div className="filter-bar">
                <div className="search-wrapper">
                  <i className="fa fa-search search-icon"></i>
                  <input 
                    type="text" placeholder="Search by language..." className="search-input" 
                    value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              <div className="table-container">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Language</th>
                      <th>Heritage ID</th>
                      <th>Audio Path</th>
                      <th>Video Path</th>
                      <th>Status</th>
                      <th style={{ textAlign: 'right' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loading ? (
                       <tr>
                         <td colSpan="6" className="text-center" style={{ padding: '50px' }}>
                           <i className="fa fa-spinner fa-spin"></i> Loading guides...
                         </td>
                       </tr> 
                    ) : data.length > 0 ? (
                      data.filter(g => (g.language || "").toLowerCase().includes(searchTerm.toLowerCase())).map((guide) => (
                        <tr key={guide._id} className="table-row">
                          <td className="prop-name"><strong>{guide.language || "N/A"}</strong></td>
                          <td style={{fontSize:'12px'}}>{guide.heritage_id || "N/A"}</td>
                          <td style={{fontSize:'11px', color:'#666'}}>{guide.audio_path || "-"}</td>
                          <td style={{fontSize:'11px', color:'#666'}}>{guide.video_path || "-"}</td>
                          <td>
                            <span className={`status-badge status-${(guide.status || "ACTIVE").toLowerCase()}`}>
                              {guide.status || "ACTIVE"}
                            </span>
                          </td>
                          <td className="actions-cell" style={{ textAlign: 'right' }}>
                            <button className="btn-action btn-reply" onClick={() => { setFormData(guide); setView('form'); }}><i className="fa fa-pencil"></i></button>
                            <button className="btn-action btn-delete" onClick={() => handleDelete(guide._id)}><i className="fa fa-trash"></i></button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr><td colSpan="6" className="text-center" style={{ padding: '30px', color: '#999' }}>No guides found.</td></tr>
                    )}
                  </tbody>
                </table>
              </div>
            </>
          ) : (
            /* FORM VIEW */
            <div className="fade-in">
              <div className="page-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <button onClick={() => setView('list')} className="btn btn-secondary"><i className="fa fa-arrow-left"></i> Back</button>
                  <h1>{formData._id ? 'Edit Guide' : 'Register Guide'}</h1>
                </div>
                <button onClick={handleSave} className="btn btn-primary" disabled={isSaving}>
                  {isSaving ? "Saving..." : <><i className="fa fa-save"></i> Save Changes</>}
                </button>
              </div>

              <div className="edit-layout-grid">
                <div className="form-card">
                  <h3>Basic Linkage</h3>
                  <div className="form-group">
                    <label>Heritage Site ID</label>
                    <input type="text" className="form-control" value={formData.heritage_id} onChange={(e) => setFormData({...formData, heritage_id: e.target.value})} placeholder="Paste Heritage ID here" />
                  </div>
                  <div className="form-group">
                    <label>Language</label>
                    <select className="form-control" value={formData.language} onChange={(e) => setFormData({...formData, language: e.target.value})}>
                      <option value="English">English</option>
                      <option value="Hindi">Hindi</option>
                      <option value="French">French</option>
                      <option value="Spanish">Spanish</option>
                    </select>
                  </div>
                </div>
                <div className="form-card">
                  <h3>Media File Paths</h3>
                  <div className="form-group">
                    <label>Audio File Path</label>
                    <input type="text" className="form-control" value={formData.audio_path} onChange={(e) => setFormData({...formData, audio_path: e.target.value})} placeholder="/uploads/audio/..." />
                  </div>
                  <div className="form-group">
                    <label>Video File Path</label>
                    <input type="text" className="form-control" value={formData.video_path} onChange={(e) => setFormData({...formData, video_path: e.target.value})} placeholder="/uploads/video/..." />
                  </div>
                  <div className="form-group">
                    <label>Status</label>
                    <select className="form-control" value={formData.status} onChange={(e) => setFormData({...formData, status: e.target.value})}>
                      <option value="ACTIVE">ACTIVE</option>
                      <option value="INACTIVE">INACTIVE</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {showToast && <div className="toast-notification">{toastMsg}</div>}
    </div>
  );
}

export default AdminManageGuide;