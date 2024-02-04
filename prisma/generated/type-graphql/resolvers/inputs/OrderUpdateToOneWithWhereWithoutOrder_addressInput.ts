import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderUpdateWithoutOrder_addressInput } from "../inputs/OrderUpdateWithoutOrder_addressInput";
import { OrderWhereInput } from "../inputs/OrderWhereInput";

@TypeGraphQL.InputType("OrderUpdateToOneWithWhereWithoutOrder_addressInput", {})
export class OrderUpdateToOneWithWhereWithoutOrder_addressInput {
  @TypeGraphQL.Field(_type => OrderWhereInput, {
    nullable: true
  })
  where?: OrderWhereInput | undefined;

  @TypeGraphQL.Field(_type => OrderUpdateWithoutOrder_addressInput, {
    nullable: false
  })
  data!: OrderUpdateWithoutOrder_addressInput;
}
