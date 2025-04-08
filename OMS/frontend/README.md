


const handleAdd = (e) => {
    e.preventDefault();
    setTableData(prev => [...prev, formData]);
    setFormData({
      company: '',
      address: '',
      material: '',
      qrt: '',
      reta: ''
    });
  };
