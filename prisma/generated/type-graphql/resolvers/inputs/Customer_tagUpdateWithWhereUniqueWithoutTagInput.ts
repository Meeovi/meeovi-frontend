import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_tagUpdateWithoutTagInput } from "../inputs/Customer_tagUpdateWithoutTagInput";
import { Customer_tagWhereUniqueInput } from "../inputs/Customer_tagWhereUniqueInput";

@TypeGraphQL.InputType("Customer_tagUpdateWithWhereUniqueWithoutTagInput", {})
export class Customer_tagUpdateWithWhereUniqueWithoutTagInput {
  @TypeGraphQL.Field(_type => Customer_tagWhereUniqueInput, {
    nullable: false
  })
  where!: Customer_tagWhereUniqueInput;

  @TypeGraphQL.Field(_type => Customer_tagUpdateWithoutTagInput, {
    nullable: false
  })
  data!: Customer_tagUpdateWithoutTagInput;
}
