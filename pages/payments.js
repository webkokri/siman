import Link from "next/link";
import { useState } from "react";
import Layout from "../components/layout/Layout";


function Payments() {
    const [projectType, setProjectType] = useState('');
    const [projectCategory, setProjectCategory] = useState('');
    const [services, setServices] = useState({});
    const [totalCost, setTotalCost] = useState(0);
  
    const handleProjectTypeChange = (e) => {
      setProjectType(e.target.value);
      calculateTotalCost();
    };
  
    const handleProjectCategoryChange = (e) => {
      setProjectCategory(e.target.value);
      calculateTotalCost();
    };
  
    const handleServiceChange = (e) => {
      setServices((prevServices) => ({ ...prevServices, [e.target.id]: e.target.checked }));
      calculateTotalCost();
    };
  
    const calculateTotalCost = () => {
      let totalCost = 0;
      if (projectType === 'website') {
        totalCost += 500;
      } else if (projectType === 'mobile-app') {
        totalCost += 800;
      } else if (projectType === 'both') {
        totalCost += 1300;
      }
  
      if (projectCategory === 'business-website') {
        totalCost += 200;
      } else if (projectCategory === 'ecommerce') {
        totalCost += 300;
      } else if (projectCategory === 'industry') {
        totalCost += 400;
      }
  
      Object.keys(services).forEach((service) => {
        if (services[service]) {
          switch (service) {
            case 'seo':
              totalCost += 200;
              break;
            case 'smo':
              totalCost += 300;
              break;
            case 'digital-marketing':
              totalCost += 500;
              break;
            case 'content-management':
              totalCost += 400;
              break;
            default:
              break;
          }
        }
      });
  
      setTotalCost(totalCost);
    };


    return (
        <>
            <Layout>
                <section className="section-box">
                    <div className="banner-hero banner-3">
                        <div className="container">
                            <div className="text-center"><span className="tag-1 bg-6 color-green-900">Success Together</span>
                                <h1 className="text-display-2 color-gray-900 mt-30">Working with us!!!</h1>
                                <div className="text-body-lead-large color-gray-500 mt-40">Our focus is always on finding the best people to work with. Our bar<br className="d-lg-block d-none" />is high, but you look ready to take on the challenge.</div>
                                <div className="mt-50">
                                    <Link href="/team" legacyBehavior><a className="btn btn-black icon-arrow-right-white mb-15 mr-20">Our Awesome Team</a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                
                <section className="section-box mt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1 col-sm-1 col-12" />
                            <div className="col-lg-10 col-sm-10 col-12 text-center">
                                <h2 className="text-heading-1 color-gray-900 mb-10">Choose the category<br className="d-lg-block d-none" />where you expert</h2>
                                <p className="text-body-lead-large color-gray-600 mt-20">You are confident in your abilities and clear<br className="d-lg-block d-none" />about where you belong, leveraging your full potential.</p>
                            </div>
                            <div className="col-lg-1 col-sm-1 col-12" />
                        </div>
                    </div>
                    <div className="container mt-40">
                        <div className="row">
                            
                        <form>
  <div class="form-group row">
    <label for="projectType" class="col-lg-3 col-form-label">Select Project Type:</label>
    <div class="col-lg-9">
      <select class="form-control bg-6" value={projectType} onChange={handleProjectTypeChange}>
        <option value="website">Website</option>
        <option value="mobile-app">Mobile Application</option>
        <option value="both">Website and Mobile Application</option>
      </select>
    </div>
  </div>

  <div class="form-group row">
    <label for="projectCategory" class="col-lg-3 col-form-label">Select Project Category:</label>
    <div class="col-lg-9">
      <select class="form-control  bg-6" value={projectCategory} onChange={handleProjectCategoryChange}>
        <option value="business-website">Business Website</option>
        <option value="ecommerce">Ecommerce</option>
        <option value="industry">Industry</option>
      </select>
    </div>
  </div>

  <div class="form-group row">
    <label class="col-lg-3 col-form-label">Select Services:</label>
    <div class="col-lg-9">
      <div class="checkbox">
        <label>
          <input
            type="checkbox"
            id="seo"
            checked={services.seo}
            onChange={handleServiceChange}
          />
          SEO (Cost: $200)
        </label>
      
        <label>
          <input
            type="checkbox"
            id="smo"
            checked={services.smo}
            onChange={handleServiceChange}
          />
          SMO (Cost: $300)
        </label>
      
        <label>
          <input
            type="checkbox"
            id="digital-marketing"
            checked={services.digitalMarketing}
            onChange={handleServiceChange}
          />
          Digital Marketing (Cost: $500)
        </label>
      
        <label>
          <input
            type="checkbox"
            id="content-management"
            checked={services.contentManagement}
            onChange={handleServiceChange}
          />
          Content Management (Cost: $400)
        </label>
      </div>
    </div>
  </div>
</form>
                            
                        </div>
                    </div>
                </section>
                
                
                

                

            </Layout>

        </>
    )
}

export default Payments;