import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateWithoutOrder_customerInput } from "../inputs/OrderCreateWithoutOrder_customerInput";
import { OrderUpdateWithoutOrder_customerInput } from "../inputs/OrderUpdateWithoutOrder_customerInput";
import { OrderWhereInput } from "../inputs/OrderWhereInput";

@TypeGraphQL.InputType("OrderUpsertWithoutOrder_customerInput", {})
export class OrderUpsertWithoutOrder_customerInput {
  @TypeGraphQL.Field(_type => OrderUpdateWithoutOrder_customerInput, {
    nullable: false
  })
  update!: OrderUpdateWithoutOrder_customerInput;

  @TypeGraphQL.Field(_type => OrderCreateWithoutOrder_customerInput, {
    nullable: false
  })
  create!: OrderCreateWithoutOrder_customerInput;

  @TypeGraphQL.Field(_type => OrderWhereInput, {
    nullable: true
  })
  where?: OrderWhereInput | undefined;
}
