import { Sistemas } from './sistemas';
export class Movil{
    
    constructor(private _pantalla:number,
        private _batería:number,
        private _so:Sistemas,
        private _marca:string,
        private _Cincog:boolean,
        private _precio:number){ }

    /**
     * Getter pantalla
     * @return {number}
     */
	public get pantalla(): number {
		return this._pantalla;
	}

    /**
     * Getter so
     * @return {Sistemas}
     */
	public get so(): Sistemas {
		return this._so;
	}

    /**
     * Getter marca
     * @return {string}
     */
	public get marca(): string {
		return this._marca;
	}

    /**
     * Getter 5g
     * @return {boolean}
     */
	public get cincoG(): boolean {
		return this._Cincog;
	}

    /**
     * Getter precio
     * @return {number}
     */
	public get precio(): number {
		return this._precio;
	}

    /**
     * Setter pantalla
     * @param {number} value
     */
	public set pantalla(value: number) {
		this._pantalla = value;
	}

    /**
     * Setter so
     * @param {Sistemas} value
     */
	public set so(value: Sistemas) {
		this._so = value;
	}

    /**
     * Setter marca
     * @param {string} value
     */
	public set marca(value: string) {
		this._marca = value;
	}

    /**
     * Setter 5g
     * @param {boolean} value
     */
	public set cincoG(value: boolean) {
		this._Cincog = value;
	}

    /**
     * Setter precio
     * @param {number} value
     */
	public set precio(value: number) {
		this._precio = value;
	}
   
}