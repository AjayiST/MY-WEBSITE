# Troubleshooting: White Page Issue

If the page is showing white instead of the portfolio, try these steps:

## 1. **Hard Refresh Browser** (Most Common Fix)
   - **Windows/Linux**: Press `Ctrl + Shift + R`
   - **Mac**: Press `Cmd + Shift + R` 
   - This clears the browser cache and reloads fresh assets

## 2. **Check Dev Server is Running**
   ```bash
   npm run dev
   ```
   You should see:
   ```
   ➜  Local: http://localhost:5174/
   ```

## 3. **Verify Backend Server (if using contact form)**
   In another terminal:
   ```bash
   npm run server
   ```

## 4. **Check Browser Console for Errors**
   - Press `F12` or `Ctrl + Shift + I`
   - Go to "Console" tab
   - Look for red error messages

## 5. **Restart Dev Server**
   - Stop the dev server (Press `Ctrl + C` in the terminal)
   - Delete `.vite` folder if it exists
   - Run `npm run dev` again

## 6. **Clear All Caches**
   ```bash
   # Delete node_modules and reinstall
   rm -r node_modules
   npm install
   npm run dev
   ```

## What You Should See

Once working, you'll see a dark purple/black gradient background with:
- Navigation bar at the top
- "Portfolio Loaded Successfully!" message
- Hero section with typing animation
- Skills carousel
- Projects showcase
- Contact form
- Footer

## Expected Page Elements

✅ Dark gradient background (dark blue to purple)
✅ White text
✅ Smooth animations on scroll
✅ Responsive layout
✅ Clickable navigation buttons

---

If you still see a white page after trying all steps, check:
- That `http://localhost:5174/` is being accessed (not 5173)
- Browser developer console (F12) for JavaScript errors
- Terminal output for compilation errors

