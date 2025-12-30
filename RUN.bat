@echo off
REM Script para instalar dependências e rodar o servidor Vite
REM Compatível com Windows PowerShell e Command Prompt

cd /d "C:\Users\Will\Downloads\yasmine-f.-oliveira---advocacia-de-excelência"

echo ===============================================
echo Instalando dependências npm...
echo ===============================================
call npm install

echo.
echo ===============================================
echo Iniciando servidor de desenvolvimento (Vite)...
echo ===============================================
echo O site abrirá em: http://localhost:3000
echo.
call npm run dev

pause

