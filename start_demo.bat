@echo off
title VLearn LMS Active Tutor Server
echo ====================================================================
echo   Khoi dong Local Server cho VLearn LMS Prototype (Track D2)
echo ====================================================================
echo.
echo [1/2] Dang khoi dong Web Server tai cong 3000...

start /b python -m http.server 3000 --directory codebase >nul 2>&1

timeout /t 1 /nobreak >nul

echo [2/2] Dang mo trinh duyet tai: http://localhost:3000
start http://localhost:3000

echo.
echo ====================================================================
echo   Server dang chay tai: http://localhost:3000
echo   (Nhan bat ky phim nao de dong cua so nay khi quay xong)
echo ====================================================================
pause
