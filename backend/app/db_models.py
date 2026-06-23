from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import JSON
from sqlalchemy import DateTime

from datetime import datetime

from .database import Base


class Proposal(Base):

    __tablename__ = "proposals"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    website_url = Column(
        String,
        nullable=False
    )

    business_goal = Column(
        String,
        nullable=False
    )

    proposal_json = Column(
        JSON,
        nullable=False
    )

    created_at = Column(
        DateTime,
        default=datetime.utcnow
    )