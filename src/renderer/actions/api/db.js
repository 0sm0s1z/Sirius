export async function getHosts() {
  try {
    const response = await fetch('http://localhost:8080/api/get/hosts');
    return await response.json();
  } catch (error) {
    return [];
  }
}

export async function getVendors() {
  try {
    const response = await fetch('http://localhost:8080/api/data/cpe_vendors');
    return await response.json();
  } catch (error) {
    return [];
  }
}

export async function addHost(data) {
  try {
    const response = await fetch(`http://localhost:8080/api/add/host`, {
      method: 'POST',
      mode: 'same-origin',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (error) {
    return [];
  }
}

export async function taskAgent(data) {
  try {
    const response = await fetch(`http://localhost:8080/api/agent/task`, {
      method: 'POST',
      mode: 'same-origin',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (error) {
    return [];
  }
}

export async function getTerminalHistory(data) {
  try {
    const response = await fetch(
      `http://localhost:8080/api/data/terminalhistory`,
      {
        method: 'POST',
        mode: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }
    );
    return await response.json();
  } catch (error) {
    return [];
  }
}

export async function getVulnerabilityList(data) {
  try {
    const response = await fetch(`http://localhost:8080/api/svdb/report/host`, {
      method: 'POST',
      mode: 'same-origin',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (error) {
    return [];
  }
}
