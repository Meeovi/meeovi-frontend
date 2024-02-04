import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateManyUser_order_updated_by_idTouserInputEnvelope } from "../inputs/OrderCreateManyUser_order_updated_by_idTouserInputEnvelope";
import { OrderCreateOrConnectWithoutUser_order_updated_by_idTouserInput } from "../inputs/OrderCreateOrConnectWithoutUser_order_updated_by_idTouserInput";
import { OrderCreateWithoutUser_order_updated_by_idTouserInput } from "../inputs/OrderCreateWithoutUser_order_updated_by_idTouserInput";
import { OrderScalarWhereInput } from "../inputs/OrderScalarWhereInput";
import { OrderUpdateManyWithWhereWithoutUser_order_updated_by_idTouserInput } from "../inputs/OrderUpdateManyWithWhereWithoutUser_order_updated_by_idTouserInput";
import { OrderUpdateWithWhereUniqueWithoutUser_order_updated_by_idTouserInput } from "../inputs/OrderUpdateWithWhereUniqueWithoutUser_order_updated_by_idTouserInput";
import { OrderUpsertWithWhereUniqueWithoutUser_order_updated_by_idTouserInput } from "../inputs/OrderUpsertWithWhereUniqueWithoutUser_order_updated_by_idTouserInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType("OrderUpdateManyWithoutUser_order_updated_by_idTouserNestedInput", {})
export class OrderUpdateManyWithoutUser_order_updated_by_idTouserNestedInput {
  @TypeGraphQL.Field(_type => [OrderCreateWithoutUser_order_updated_by_idTouserInput], {
    nullable: true
  })
  create?: OrderCreateWithoutUser_order_updated_by_idTouserInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderCreateOrConnectWithoutUser_order_updated_by_idTouserInput], {
    nullable: true
  })
  connectOrCreate?: OrderCreateOrConnectWithoutUser_order_updated_by_idTouserInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderUpsertWithWhereUniqueWithoutUser_order_updated_by_idTouserInput], {
    nullable: true
  })
  upsert?: OrderUpsertWithWhereUniqueWithoutUser_order_updated_by_idTouserInput[] | undefined;

  @TypeGraphQL.Field(_type => OrderCreateManyUser_order_updated_by_idTouserInputEnvelope, {
    nullable: true
  })
  createMany?: OrderCreateManyUser_order_updated_by_idTouserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [OrderWhereUniqueInput], {
    nullable: true
  })
  set?: OrderWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderWhereUniqueInput], {
    nullable: true
  })
  disconnect?: OrderWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderWhereUniqueInput], {
    nullable: true
  })
  delete?: OrderWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderWhereUniqueInput], {
    nullable: true
  })
  connect?: OrderWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderUpdateWithWhereUniqueWithoutUser_order_updated_by_idTouserInput], {
    nullable: true
  })
  update?: OrderUpdateWithWhereUniqueWithoutUser_order_updated_by_idTouserInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderUpdateManyWithWhereWithoutUser_order_updated_by_idTouserInput], {
    nullable: true
  })
  updateMany?: OrderUpdateManyWithWhereWithoutUser_order_updated_by_idTouserInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderScalarWhereInput], {
    nullable: true
  })
  deleteMany?: OrderScalarWhereInput[] | undefined;
}
