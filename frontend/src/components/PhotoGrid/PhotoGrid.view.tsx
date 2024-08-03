import PhotoGridController from './PhotoGrid.controller';
import './PhotoGrid.style.css';

const PhotoGridView = () => {
  const { photos } = PhotoGridController();
  

  return (
    <div className='photoGridContainer'>
      {photos?.map((photo: any) => (
        <img src={photo} alt={photo} />
      ))}
    </div>
  );
};

export default PhotoGridView;