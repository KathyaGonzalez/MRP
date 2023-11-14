/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.mrp;

import java.util.ArrayList;

/**
 *
 * @author bryan
 */
public class Nodo {

    public Integer nivel;
    public String mrp;
    public Integer inv;
    public Integer ts;
    public Integer q;
    public Integer tamaño;
    public Integer stock;
    public Integer multiplicador;
    public Integer[] arrayReq;
    public String demandaHijos;
    public Nodo padre;
    public ArrayList<Nodo> arrayhijos = new ArrayList<>();
    public Integer[][] Matriz;
    private boolean primero = true;

    public Nodo(String arrayReq, int nv, String mr, int inT, int ts, int stock, int multiplicador, int q) {
        // Inicializar las variables de instancia con los valores proporcionados
        this.nivel = nv;
        this.mrp = mr;
        this.inv = inT;
        this.ts = ts;
        this.stock = stock;
        this.multiplicador = multiplicador;
        this.q = q;
        this.arrayReq = separarYConvertirNumeros(arrayReq, ts, multiplicador);
        this.Matriz = new Integer[5][this.arrayReq.length];
        this.tamaño= this.arrayReq.length;
        for (int j = 0; j < this.arrayReq.length; j++) {
            for (int i = 0; i < 4; i++) {
                this.Matriz[i][j] = 0;
            }
        }
        this.generarTabla();
    }

    public Nodo(String arrayReq, int nv, String mr, int inT, int ts, int stock, int multiplicador, int q, Nodo padre) {
        // Inicializar las variables de instancia con los valores proporcionados
        this.padre = padre;
        this.nivel = nv;
        this.mrp = mr;
        this.inv = inT;
        this.ts = ts;
        this.stock = stock;
        this.multiplicador = multiplicador;
        this.q = q;
        this.arrayReq = separarYConvertirNumeros(this.padre.demandaHijos, ts, multiplicador);
        this.Matriz = new Integer[5][this.arrayReq.length];
        this.tamaño= this.arrayReq.length;
        for (int j = 0; j < this.arrayReq.length; j++) {
            for (int i = 0; i < 4; i++) {
                this.Matriz[i][j] = 0;
            }
        }
        this.generarTabla();
    }

    public Nodo getPadre() {
        return padre;
    }

    public void setPadre(Nodo padre) {
        this.padre = padre;
    }

    public ArrayList<Nodo> getArrayhijos() {
        return arrayhijos;
    }

    public void setArrayhijos(ArrayList<Nodo> arrayhijos) {
        this.arrayhijos = arrayhijos;
    }

    private void generarTabla() {
        if (this.multiplicador > 1) {
            for (int l = 0; l < arrayReq.length; l++) {
                arrayReq[l] = arrayReq[l] * this.multiplicador;
            }
        }
        for (int j = 0; j < arrayReq.length; j++) {
            // verifico que no sea cero la demanda
            if (arrayReq[j] != 0) {
                int inventario = 0;
                if (this.primero) {
                    inventario = this.inv - this.stock;
                    this.primero = false;
                } else {
                    inventario = this.Matriz[0][j - 1] - this.arrayReq[j-1] + this.Matriz[2][j - 1];
                }
                this.Matriz[0][j] = inventario; // ya setee inventario
                int reqNetos = this.arrayReq[j] - this.Matriz[0][j];
                this.Matriz[1][j]=reqNetos;
                int requeridos = 0;
                if (reqNetos > 0) {
                    int aux = reqNetos;
                    while (aux > 0) {
                        aux -= this.q;
                        requeridos += q;
                    }
                }
                this.Matriz[2][j] = requeridos; // LOS QUE RECIBO
                this.Matriz[3][j - this.ts] = requeridos; // LOS QUE PIDO
            }
            for (int k = 0; k < arrayReq.length; k++) {
                    System.out.print(arrayReq[k] + "//");
            }
            System.out.println();
            for (int i = 0; i < 4; i++) {
                for (int k = 0; k < arrayReq.length; k++) {
                    System.out.print(this.Matriz[i][k] + "//");
                }
                System.out.println();
            }
            System.out.println();
            System.out.println();
        }
        String cadena = "";
        boolean prim = true;
        for (int i = 0; i < arrayReq.length; i++) {
            if (this.Matriz[3][i] != 0) {
                if(prim){
                    cadena = this.Matriz[3][i].toString();
                    prim= false;
                }
                else{
                    cadena = cadena+","+this.Matriz[3][i].toString();
                }
            }
        }
        this.demandaHijos = cadena;
        System.out.println("Demanda Hijos: " +this.demandaHijos);
        System.out.println(this.mrp + " : " + this.nivel);
        for (int i = 0; i < 4; i++) {
            for (int j = 0; j < arrayReq.length; j++) {
                System.out.print(this.Matriz[i][j] + "//");
            }
            System.out.println();
        }
    }

    public Integer getNivel() {
        return nivel;
    }

    public void setNivel(Integer nivel) {
        this.nivel = nivel;
    }

    public String getMrp() {
        return mrp;
    }

    public void setMrp(String mrp) {
        this.mrp = mrp;
    }

    public static Integer[] separarYConvertirNumeros(String numerosComoString, int num, int multiplicador) {
        // Dividir la cadena usando la coma como delimitador
        String[] numerosSeparados = numerosComoString.split(",");
        int tamaño = numerosSeparados.length + num;
        // Crear un array para almacenar los números como enteros
        Integer[] requerimientos = new Integer[tamaño];

        // Convertir los números y agregarlos al array
        for (int i = 0; i < num; i++) {
            requerimientos[i] = 0;
        }
        for (int i = num; i < tamaño; i++) {
            requerimientos[i] = Integer.parseInt(numerosSeparados[i - num]);
        }

        return requerimientos;
    }


}
