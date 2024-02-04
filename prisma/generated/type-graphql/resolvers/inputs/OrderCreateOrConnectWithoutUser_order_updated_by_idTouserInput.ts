import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateWithoutUser_order_updated_by_idTouserInput } from "../inputs/OrderCreateWithoutUser_order_updated_by_idTouserInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType("OrderCreateOrConnectWithoutUser_order_updated_by_idTouserInput", {})
export class OrderCreateOrConnectWithoutUser_order_updated_by_idTouserInput {
  @TypeGraphQL.Field(_type => OrderWhereUniqueInput, {
    nullable: false
  })
  where!: OrderWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrderCreateWithoutUser_order_updated_by_idTouserInput, {
    nullable: false
  })
  create!: OrderCreateWithoutUser_order_updated_by_idTouserInput;
}
