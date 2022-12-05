export namespace BBB {
    export interface section{
        id: number;
        title: string;
        description: string;
        teams : [
          {
            name: string,
            logo: string,
            pictures: string
          }
        ];
      }
}