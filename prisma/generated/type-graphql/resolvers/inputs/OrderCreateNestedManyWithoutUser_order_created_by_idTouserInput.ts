import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateManyUser_order_created_by_idTouserInputEnvelope } from "../inputs/OrderCreateManyUser_order_created_by_idTouserInputEnvelope";
import { OrderCreateOrConnectWithoutUser_order_created_by_idTouserInput } from "../inputs/OrderCreateOrConnectWithoutUser_order_created_by_idTouserInput";
import { OrderCreateWithoutUser_order_created_by_idTouserInput } from "../inputs/OrderCreateWithoutUser_order_created_by_idTouserInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType("OrderCreateNestedManyWithoutUser_order_created_by_idTouserInput", {})
export class OrderCreateNestedManyWithoutUser_order_created_by_idTouserInput {
  @TypeGraphQL.Field(_type => [OrderCreateWithoutUser_order_created_by_idTouserInput], {
    nullable: true
  })
  create?: OrderCreateWithoutUser_order_created_by_idTouserInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderCreateOrConnectWithoutUser_order_created_by_idTouserInput], {
    nullable: true
  })
  connectOrCreate?: OrderCreateOrConnectWithoutUser_order_created_by_idTouserInput[] | undefined;

  @TypeGraphQL.Field(_type => OrderCreateManyUser_order_created_by_idTouserInputEnvelope, {
    nullable: true
  })
  createMany?: OrderCreateManyUser_order_created_by_idTouserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [OrderWhereUniqueInput], {
    nullable: true
  })
  connect?: OrderWhereUniqueInput[] | undefined;
}
