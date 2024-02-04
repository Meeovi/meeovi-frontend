import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderUpdateWithoutUser_order_updated_by_idTouserInput } from "../inputs/OrderUpdateWithoutUser_order_updated_by_idTouserInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType("OrderUpdateWithWhereUniqueWithoutUser_order_updated_by_idTouserInput", {})
export class OrderUpdateWithWhereUniqueWithoutUser_order_updated_by_idTouserInput {
  @TypeGraphQL.Field(_type => OrderWhereUniqueInput, {
    nullable: false
  })
  where!: OrderWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrderUpdateWithoutUser_order_updated_by_idTouserInput, {
    nullable: false
  })
  data!: OrderUpdateWithoutUser_order_updated_by_idTouserInput;
}
