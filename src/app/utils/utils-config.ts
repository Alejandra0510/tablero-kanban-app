export class UtilsConfig{

  static getPriority(priority: string){
    if(!priority) return;

    switch (priority) {
      case 'Alta':
        return 'bg-secondary text-secondary-content';

      case 'Media':
        return 'bg-warning text-warning-content';

      default:
        return 'bg-primary text-primary-content';
    }
  }

}

