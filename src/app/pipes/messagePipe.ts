import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'subjectPipe'})
export class MessageSubjectPipe implements PipeTransform {
    transform(item: string): string {
        return item.length>=80 ?item.substr(0,80)+"..." : item;
    }
}
