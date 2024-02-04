import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateWithoutOrder_addressInput } from "../inputs/OrderCreateWithoutOrder_addressInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType("OrderCreateOrConnectWithoutOrder_addressInput", {})
export class OrderCreateOrConnectWithoutOrder_addressInput {
  @TypeGraphQL.Field(_type => OrderWhereUniqueInput, {
    nullable: false
  })
  where!: OrderWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrderCreateWithoutOrder_addressInput, {
    nullable: false
  })
  create!: OrderCreateWithoutOrder_addressInput;
}
