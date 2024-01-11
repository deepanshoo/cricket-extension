async function getMatchData() {
    try {
      const response = await fetch("https://api.cricapi.com/v1/currentMatches?apikey=66f5298d-9362-4e67-977d-dbf4689b68bd&offset=0");
      const data = await response.json();
  
      if (data.status !== "success") return;
  
      const matchesList = data.data;
  
      if (!matchesList) return [];
  
      const relevantData = matchesList
        .filter(match => match.name.toLowerCase().includes('india')) 
        .map(match => `${match.name}, ${match.status}`);
  
      document.getElementById("matches").innerHTML = relevantData.map(match => `<li>${match}</li>`).join('');
  
      return relevantData;
    } catch (error) {
      console.error(error);
    }
  }
  
  getMatchData();