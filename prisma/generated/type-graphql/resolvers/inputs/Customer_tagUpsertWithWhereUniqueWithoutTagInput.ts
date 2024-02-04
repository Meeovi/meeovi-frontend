import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_tagCreateWithoutTagInput } from "../inputs/Customer_tagCreateWithoutTagInput";
import { Customer_tagUpdateWithoutTagInput } from "../inputs/Customer_tagUpdateWithoutTagInput";
import { Customer_tagWhereUniqueInput } from "../inputs/Customer_tagWhereUniqueInput";

@TypeGraphQL.InputType("Customer_tagUpsertWithWhereUniqueWithoutTagInput", {})
export class Customer_tagUpsertWithWhereUniqueWithoutTagInput {
  @TypeGraphQL.Field(_type => Customer_tagWhereUniqueInput, {
    nullable: false
  })
  where!: Customer_tagWhereUniqueInput;

  @TypeGraphQL.Field(_type => Customer_tagUpdateWithoutTagInput, {
    nullable: false
  })
  update!: Customer_tagUpdateWithoutTagInput;

  @TypeGraphQL.Field(_type => Customer_tagCreateWithoutTagInput, {
    nullable: false
  })
  create!: Customer_tagCreateWithoutTagInput;
}
