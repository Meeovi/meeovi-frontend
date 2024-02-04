import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderUpdateWithoutOrder_customerInput } from "../inputs/OrderUpdateWithoutOrder_customerInput";
import { OrderWhereInput } from "../inputs/OrderWhereInput";

@TypeGraphQL.InputType("OrderUpdateToOneWithWhereWithoutOrder_customerInput", {})
export class OrderUpdateToOneWithWhereWithoutOrder_customerInput {
  @TypeGraphQL.Field(_type => OrderWhereInput, {
    nullable: true
  })
  where?: OrderWhereInput | undefined;

  @TypeGraphQL.Field(_type => OrderUpdateWithoutOrder_customerInput, {
    nullable: false
  })
  data!: OrderUpdateWithoutOrder_customerInput;
}
