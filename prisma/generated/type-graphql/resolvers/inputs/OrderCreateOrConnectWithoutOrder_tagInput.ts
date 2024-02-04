import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateWithoutOrder_tagInput } from "../inputs/OrderCreateWithoutOrder_tagInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType("OrderCreateOrConnectWithoutOrder_tagInput", {})
export class OrderCreateOrConnectWithoutOrder_tagInput {
  @TypeGraphQL.Field(_type => OrderWhereUniqueInput, {
    nullable: false
  })
  where!: OrderWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrderCreateWithoutOrder_tagInput, {
    nullable: false
  })
  create!: OrderCreateWithoutOrder_tagInput;
}
