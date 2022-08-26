const updateOnlineStatus = () => {
    document.getElementById('status_internet').innerHTML = navigator.onLine ? 'online' : 'offline'
}
  
window.addEventListener('online', updateOnlineStatus)
window.addEventListener('offline', updateOnlineStatus)
  
updateOnlineStatus()