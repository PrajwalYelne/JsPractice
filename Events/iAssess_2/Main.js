<!DOCTYPE html>
<html lang="en">
    <script>
        function warning() {
            alert('Cut/Copy/Paste is restricted.');
        }
    </script>
<body>
    <h2>Programming Contest</h2>
    <textarea id="editor" name="" rows="10" cols="30" oncut="warning()" oncopy="warning()" onpaste="warning()"></textarea>
</body>
</html>
