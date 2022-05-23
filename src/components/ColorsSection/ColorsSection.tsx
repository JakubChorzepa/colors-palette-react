import { ColorsWrapper, Color } from './ColorsSection.styles';
import { ColorsType } from "../../App";
import { FaLock, FaUnlockAlt, FaCopy } from 'react-icons/fa';

type ColorsSectionsProps = {
  colors: ColorsType[];
}

const ColorsSection = ({ colors }: ColorsSectionsProps) => {
  console.log(colors);

  return (
    <ColorsWrapper>
      {
        colors.map(color => (
            <Color key={color.id} bgColor={color.hexCode} >
              <div className='icons-wrapper'>
                  <button title='Un/lock the color' className='icon-button'>
                    { 
                      color.isLocked ? ( <FaLock className='icon'/>) : ( <FaUnlockAlt className='icon'/> ) 
                    }
                  </button>
                  <button title='Copy to clipboard' className='icon-button'>
                    <FaCopy className='icon'/>
                  </button>
              </div>
              <p>{color.hexCode}</p>
            </Color>
        ))
      }
    </ColorsWrapper>
  )
}

export default ColorsSection;