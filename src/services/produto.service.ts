import { HttpClient } from "@angular/common/http";
import { ProdutoModel } from "../models/produto.model";
import { BaseService } from "./base.service";
import { Injectable } from "@angular/core";

@Injectable ({
    providedIn: 'root'
})
export class ProdutoService extends BaseService<ProdutoModel> {
    protected override modulo = "produtos"

    constructor(httpClient : HttpClient) {
        super(httpClient);
    }
}