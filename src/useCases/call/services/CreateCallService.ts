interface ICallRequest {
  origin: number;
  destiny: number;
  minutes: number;
}
/* 
  011 => 016 = 1.90 $/min
  016 => 011 = 2.90 $/min
  011 => 017 = 1.70 $/min
  017 => 011 = 2.70 $/min
  011 => 018 = 0.90 $/min
  018 => 011 = 1.90 $/min
*/
export class CreateCallService {
  execute({ origin, destiny, minutes }: ICallRequest) {
    const information = {
      plan0: 0,
      plan30: 0,
      plan60: 0,
      plan120: 0,
    };
    function plan30(value: number) {
      const taxes = value * 1.1;
      let total = minutes - 30;
      if (total > 0) {
        total *= taxes;
        return total;
      }
      return 0;
    }
    function plan60(value: number) {
      const taxes = value * 1.1;
      let total = minutes - 60;
      if (total > 0) {
        total *= taxes;
        return total;
      }
      return 0;
    }
    function plan120(value: number) {
      const taxes = value * 1.1;
      let total = minutes - 120;
      if (total > 0) {
        total *= taxes;
        return total;
      }
      return 0;
    }
    if (origin === 11 && destiny === 16) {
      const value = 1.9;
      information.plan0 = minutes * value;
      information.plan30 = plan30(value);
      information.plan60 = plan60(value);
      information.plan120 = plan120(value);
    } else if (origin === 16 && destiny === 11) {
      const value = 2.9;
      information.plan0 = minutes * value;
      information.plan30 = plan30(value);
      information.plan60 = plan60(value);
      information.plan120 = plan120(value);
    } else if (origin === 11 && destiny === 17) {
      const value = 1.7;
      information.plan0 = minutes * value;
      information.plan30 = plan30(value);
      information.plan60 = plan60(value);
      information.plan120 = plan120(value);
    } else if (origin === 17 && destiny === 11) {
      const value = 2.7;
      information.plan0 = minutes * value;
      information.plan30 = plan30(value);
      information.plan60 = plan60(value);
      information.plan120 = plan120(value);
    } else if (origin === 11 && destiny === 18) {
      const value = 0.9;
      information.plan0 = minutes * value;
      information.plan30 = plan30(value);
      information.plan60 = plan60(value);
      information.plan120 = plan120(value);
    } else {
      const value = 1.9;
      information.plan0 = minutes * value;
      information.plan30 = plan30(value);
      information.plan60 = plan60(value);
      information.plan120 = plan120(value);
    }
    console.log(information);
    return information;
  }
}
