import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../redux/slices/userSlice";
import { Card, Avatar, Typography, Row, Col } from "antd";
const { Title, Text } = Typography;

export default function UserCard() {
  const { data, status, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
    if (status === "succeeded") {
      console.log(data.results[0]);
    }
  }, []);
  return (
    <></>
    // <Card
    //   hoverable
    //   style={{ width: 300, margin: "16px auto" }}
    //   cover={
    //     <Avatar
    //       src={user.image}
    //       size={128}
    //       style={{ margin: "16px auto", display: "block" }}
    //     />
    //   }
    // >
    //   <Title level={4}>
    //     {user.title} {user.firstName} {user.lastName}
    //   </Title>

    //   <Row gutter={[8, 8]}>
    //     <Col span={24}>
    //       <Text strong>Location:</Text>
    //       <Text>
    //         {user.city}, {user.state}, {user.country}
    //       </Text>
    //     </Col>

    //     <Col span={24}>
    //       <Text strong>Email:</Text>
    //       <Text>{user.email}</Text>
    //     </Col>

    //     <Col span={24}>
    //       <Text strong>Phone:</Text>
    //       <Text>{user.phone}</Text>
    //     </Col>

    //     <Col span={24}>
    //       <Text strong>Date of Birth:</Text>
    //       <Text>{user.dob}</Text>
    //     </Col>
    //   </Row>
    // </Card>
  );
}
