import pytest
from portfolio_app.models import Projects

@pytest.mark.django_db
def test_can_create_project():
    p = Projects.objects.create(
        company="TestCo",
        year=2025,
        title="Test",
        description="Desc",
        image="https://example.com/img.png",
        ordinal=1,
    )
    assert Projects.objects.count() == 1
    assert p.title == "Test"
