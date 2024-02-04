import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderUpdateWithoutOrder_tagInput } from "../inputs/OrderUpdateWithoutOrder_tagInput";
import { OrderWhereInput } from "../inputs/OrderWhereInput";

@TypeGraphQL.InputType("OrderUpdateToOneWithWhereWithoutOrder_tagInput", {})
export class OrderUpdateToOneWithWhereWithoutOrder_tagInput {
  @TypeGraphQL.Field(_type => OrderWhereInput, {
    nullable: true
  })
  where?: OrderWhereInput | undefined;

  @TypeGraphQL.Field(_type => OrderUpdateWithoutOrder_tagInput, {
    nullable: false
  })
  data!: OrderUpdateWithoutOrder_tagInput;
}
