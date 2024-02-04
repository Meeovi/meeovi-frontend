import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_tagCreateWithoutTagInput } from "../inputs/Order_tagCreateWithoutTagInput";
import { Order_tagWhereUniqueInput } from "../inputs/Order_tagWhereUniqueInput";

@TypeGraphQL.InputType("Order_tagCreateOrConnectWithoutTagInput", {})
export class Order_tagCreateOrConnectWithoutTagInput {
  @TypeGraphQL.Field(_type => Order_tagWhereUniqueInput, {
    nullable: false
  })
  where!: Order_tagWhereUniqueInput;

  @TypeGraphQL.Field(_type => Order_tagCreateWithoutTagInput, {
    nullable: false
  })
  create!: Order_tagCreateWithoutTagInput;
}
