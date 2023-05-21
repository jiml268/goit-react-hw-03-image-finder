import { InfinitySpin } from 'react-loader-spinner';


export const Loader = () => (
  <div className="Loader">
    <InfinitySpin
      visible={true}
      height="200"
      width="200"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
    />
  </div>
);