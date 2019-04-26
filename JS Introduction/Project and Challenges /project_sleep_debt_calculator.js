const getSleepHours = day => {
    switch (day){
      case 'monday': 
        return 8;
        break; 
      case 'tuesday': 
        return 6;
        break; 
      case 'wednesday': 
        return 8;
        break; 
      case 'thursday': 
        return 6;
        break; 
      case 'friday': 
        return 8;
        break; 
      case 'saturday': 
        return 6;  
        break; 
      case 'sunday': 
        return 8; 
        break; 
      default : 
        return 'An error!';
    }  
  };
  
  /*const getActualSleepHours = () => {
  return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') +
  getSleepHours('sunday');
  }*/
  
  const getActualSleepHours = () => {
  return 8 + 6 + 8 + 6 + 8 + 6 +
  8;
  };
  
  /*const getIdealSleepHours = () => {
    const idealHours = 8; 
    return idealHours * 7;
  };*/
  
  const getIdealSleepHours = idealHours => idealHours*7; 
  console.log(getIdealSleepHours(8)); 
  
  
  
  const calculateSleepDebt = () => {
    const idealSleepHours = getIdealSleepHours(8);
    const actualSleepHours = getActualSleepHours();
    const overSleepHours = actualSleepHours - idealSleepHours;
    const underSleepHours = idealSleepHours - actualSleepHours;
    if (actualSleepHours === idealSleepHours) {
      console.log (`You got the perfect amount of sleep: ${actulSleepHours} hours.`);
    } else if (actualSleepHours > idealSleepHours){
          console.log (`You got more sleep than needed. You are ${overSleepHours} hours over your ideal sleep.`); 
      } else {
              console.log (`You should get some rest. You are ${underSleepHours} hours under your ideal sleep`); 
        };
    };
    console.log (calculateSleepDebt());
  
  
  