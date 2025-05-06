import pytest
from rest_framework.test import APIClient

@pytest.mark.django_db
def test_list_projects_endpoint():
    client = APIClient()
    resp = client.get("/projects/")
    assert resp.status_code == 200
    assert isinstance(resp.json(), list)
