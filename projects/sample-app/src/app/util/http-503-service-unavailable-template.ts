export const http503ServiceUnavailableTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Sample app</title>
    <link rel="stylesheet" href="https://unpkg.com/chota">
</head>
<body style="display: flex; flex-direction: column; justify-content: center; align-items: center; width: 100vw; height: 100vh;"
    class="bg-dark text-light">
<h1>HTTP Status 503: Service unavailable</h1>
<p>
    The sample app is currently unavailable.
</p>
<p>
    This may happen when the backend has not started correctly or is still booting.
</p>
<button class="button error" onClick="window.location.reload();">Reload</button>
</body>
`;
