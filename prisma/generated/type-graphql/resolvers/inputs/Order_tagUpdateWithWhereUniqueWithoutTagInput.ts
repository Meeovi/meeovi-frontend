import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_tagUpdateWithoutTagInput } from "../inputs/Order_tagUpdateWithoutTagInput";
import { Order_tagWhereUniqueInput } from "../inputs/Order_tagWhereUniqueInput";

@TypeGraphQL.InputType("Order_tagUpdateWithWhereUniqueWithoutTagInput", {})
export class Order_tagUpdateWithWhereUniqueWithoutTagInput {
  @TypeGraphQL.Field(_type => Order_tagWhereUniqueInput, {
    nullable: false
  })
  where!: Order_tagWhereUniqueInput;

  @TypeGraphQL.Field(_type => Order_tagUpdateWithoutTagInput, {
    nullable: false
  })
  data!: Order_tagUpdateWithoutTagInput;
}
