const starterCode = {
    javascript: `// JavaScript Starter Code
console.log("Hello, World!");`,

    python: `# Python Starter Code
print("Hello, World!")`,

    java: `// Java Starter Code
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,

    csharp: `// C# Starter Code
using System;

class Program {
    static void Main() {
        Console.WriteLine("Hello, World!");
    }
}`,

    cpp: `// C++ Starter Code
#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}`,

    php: `<?php
// PHP Starter Code
echo "Hello, World!";`,

    ruby: `# Ruby Starter Code
puts "Hello, World!"`,

    go: `// Go Starter Code
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}`,

    swift: `// Swift Starter Code
print("Hello, World!")`,

    typescript: `// TypeScript Starter Code
console.log("Hello, World!");`,

    bash: `# Bash Starter Code
echo "Hello, World!"`,

    rust: `// Rust Starter Code
fn main() {
    println!("Hello, World!");
}`,

    kotlin: `// Kotlin Starter Code
fun main() {
    println("Hello, World!")
}`,

    elixir: `# Elixir Starter Code
IO.puts "Hello, World!"`,

    haskell: `-- Haskell Starter Code
main :: IO ()
main = putStrLn "Hello, World!"`,

    dart: `// Dart Starter Code
void main() {
    print('Hello, World!');
}`,

    clojure: `;; Clojure Starter Code
(println "Hello, World!")`,

    julia: `# Julia Starter Code
println("Hello, World!")`,

    perl: `# Perl Starter Code
print "Hello, World!\n";`,

    lua: `-- Lua Starter Code
print("Hello, World!")`,

    groovy: `// Groovy Starter Code
println 'Hello, World!'`,

    ocaml: `(* OCaml Starter Code *)
let () = print_endline "Hello, World!"`,

    fortran: `! Fortran Starter Code
program hello
    print *, "Hello, World!"
end program hello`,

    pascal: `program HelloWorld;
begin
    writeln('Hello, World!');
end.`,

    emacs: `;; Emacs Lisp Starter Code
(message "Hello, World!")`,

    fsharp: `// F# Starter Code
printfn "Hello, World!"`,

    racket: `#lang racket
; Racket Starter Code
(displayln "Hello, World!")`,

    scala: `// Scala Starter Code
object HelloWorld {
    def main(args: Array[String]): Unit = {
        println("Hello, World!")
    }
}`,

    smalltalk: `| helloWorld |
helloWorld := 'Hello, World!'.
Transcript show: helloWorld; cr.`,

    coffeescript: `# CoffeeScript Starter Code
console.log "Hello, World!"`,

    freebasic: `''' FreeBASIC Starter Code
Print "Hello, World!"`,

    nim: `# Nim Starter Code
echo "Hello, World!"`,

    dragon: `// Dragon Starter Code
write("Hello, World!")`,

    brainfuck: `-- Brainfuck Starter Code
+[--->++<]>+.+++++++++.+++++++..+++.`,

    golfscript: `# Golfscript Starter Code
"Hello, World!"`,

    husk: `# Husk Starter Code
"Hello, World!"`,

    retina: `# Retina Starter Code
"Hello, World!"`,

    yeethon: `# Yeethon Starter Code
print("Hello, World!")`,

    pyt: `# PyT Starter Code
print("Hello, World!")`,

    bqn: `# BQN Starter Code
"Hello, World!"`,

    cjam: `# CJAM Starter Code
"Hello, World!"`,

    forte: `# Forte Starter Code
print("Hello, World!")`,

    lolcode: `// LOLCODE Starter Code
HAI 1.2
VISIBLE "Hello, World!"
KTHXBYE`,

    cow: `MOOSAY "Hello, World!"`,

    japt: `/* Japt Starter Code */
"Hello, World!"`,

    vlang: `// V Starter Code
fn main() {
    println("Hello, World!")
}`,

    zig: `// Zig Starter Code
const std = @import("std");

pub fn main() void {
    std.debug.print("Hello, World!\n", .{});
}`,

    osabie: `// Osabie Starter Code
println("Hello, World!")`,

    prolog: `% Prolog Starter Code
:- initialization(main).
main :- write('Hello, World!'), nl.`,

    purescript: `-- PureScript Starter Code
main = log "Hello, World!"`,

    samarium: `# Samarium Starter Code
println("Hello, World!")`,

    dash: `# Dash Starter Code
print("Hello, World!")`,

    nasm: `; NASM Starter Code
section .data
    msg db 'Hello, World!', 0

section .text
    global _start

_start:
    ; write(1, msg, 13)
    mov rax, 1
    mov rdi, 1
    mov rsi, msg
    mov rdx, 13
    syscall

    ; exit(0)
    mov rax, 60
    xor rdi, rdi
    syscall`,

    nasm64: `; NASM64 Starter Code
section .data
    msg db 'Hello, World!', 0

section .text
    global _start

_start:
    mov rax, 1
    mov rdi, 1
    mov rsi, msg
    mov rdx, 13
    syscall

    mov rax, 60
    xor rdi, rdi
    syscall`,

    file: `# File Starter Code
print("Hello, World!")`,

    paradoc: `# Paradoc Starter Code
println("Hello, World!")`,

    matl: `% MATLAB Starter Code
disp('Hello, World!')`,

    cobol: `       IDENTIFICATION DIVISION.
       PROGRAM-ID. HelloWorld.
       PROCEDURE DIVISION.
           DISPLAY 'Hello, World!'.
           STOP RUN.`,

    befunge93: `0"Hello, World!"0g`,

    emojicode: `🏁🌍💖`,

    retina: `# Retina Starter Code
"Hello, World!"`,

    rockstar: `// Rockstar Starter Code
Midnight takes your heart and your soul.
Say "Hello, World!"`,

    powershell: `# PowerShell Starter Code
Write-Host "Hello, World!"`,

    fsi: `// F# Interactive Starter Code
printfn "Hello, World!"`,

    forth: `: hello-world  ." Hello, World!" ;
hello-world`,

    basic: `10 PRINT "Hello, World!"
20 END`,

    basic_net: `Imports System

Module HelloWorld
    Sub Main()
        Console.WriteLine("Hello, World!")
    End Sub
End Module`,

    csharp_net: `using System;

class Program {
    static void Main() {
        Console.WriteLine("Hello, World!");
    }
}`,

    c: `// C Starter Code
#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`,

    d: `// D Starter Code
import std.stdio;

void main() {
    writeln("Hello, World!");
}`,

    cpp: `// C++ Starter Code
#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}`,

    freebasic: `''' FreeBASIC Starter Code
Print "Hello, World!"`,

    elixir: `# Elixir Starter Code
IO.puts "Hello, World!"`,

    ocaml: `(* OCaml Starter Code *)
let () = print_endline "Hello, World!"`,

    jelly: `# Jelly Starter Code
"Hello, World!"`,

    dart: `// Dart Starter Code
void main() {
    print('Hello, World!');
}`,

    nasal: `# Nasal Starter Code
print("Hello, World!")`,

    lisp: `; Lisp Starter Code
(format t "Hello, World!")`
};


export default starterCode