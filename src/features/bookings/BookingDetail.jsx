import styled from "styled-components";
import { HiArrowUpOnSquare } from "react-icons/hi2";

import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";
import Spinner from "../../ui/Spinner";
import Modal from "../../ui/Modal.jsx";
import ConfirmDelete from "../../ui/ConfirmDelete.jsx";
import BookingDataBox from "./BookingDataBox";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "./useBooking.js";
import { useNavigate } from "react-router-dom";
import { useCheckout } from "../check-in-out/useCheckout.js";
import { useDeleteBooking } from "./useDeleteBooking.js";
import Empty from "../../ui/Empty.jsx";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
  const navigate = useNavigate();
  const { isLoading, booking = {} } = useBooking();
  const moveBack = useMoveBack();
  const { checkout, isCheckingOut } = useCheckout();
  const { deleteBooking, isDeletingBooking } = useDeleteBooking();

  const { status, id: bookingId } = booking;

  if (isLoading) return <Spinner />;
  if (Object.keys(booking).length === 0) return <Empty resource="booking" />;

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking #{bookingId}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />
      <ButtonGroup>
        {status === "unconfirmed" && (
          <Button onClick={() => navigate(`/checkin/${bookingId}`)}>
            Check in
          </Button>
        )}
        {status === "checked-in" && (
          <Button
            icon={<HiArrowUpOnSquare />}
            onClick={() => checkout(bookingId)}
            disabled={isCheckingOut}
          >
            Check out
          </Button>
        )}
        <Modal>
          {/* TODO */}
          <Modal.Open opens="delete">
            <Button variation="danger">Delete</Button>
          </Modal.Open>

          <Modal.Window name="delete">
            <ConfirmDelete
              resourceName="booking"
              disabled={isDeletingBooking}
              onConfirm={() => {
                deleteBooking(bookingId, {
                  onSettled: () => navigate(-1),
                });
              }}
            />
          </Modal.Window>
        </Modal>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default BookingDetail;
