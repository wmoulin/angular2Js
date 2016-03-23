export default class YearValidator {

  static after(year) {
    return (control) =>
    {
      if (control.value && !isNaN(control.value) && control.value > year){
        return null;
      }
      return { yearAfter: year };
    }
  }
}
