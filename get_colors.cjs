const fs = require('fs');
const html = fs.readFileSync('live_dump.html', 'utf8');

const colors = html.match(/--pbmit-[^:]+:\s*[^;]+;/g);
console.log('Colors in live_dump:', colors ? colors.slice(0, 20) : 'none');

// also search theme.css
const theme = fs.readFileSync('theme.css', 'utf8');
const themeColors = theme.match(/--pbmit-[^:]+:\s*[^;]+;/g);
console.log('Colors in theme.css:', themeColors ? themeColors.slice(0, 20) : 'none');

