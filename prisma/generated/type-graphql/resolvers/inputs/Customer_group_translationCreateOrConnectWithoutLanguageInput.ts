import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_group_translationCreateWithoutLanguageInput } from "../inputs/Customer_group_translationCreateWithoutLanguageInput";
import { Customer_group_translationWhereUniqueInput } from "../inputs/Customer_group_translationWhereUniqueInput";

@TypeGraphQL.InputType("Customer_group_translationCreateOrConnectWithoutLanguageInput", {})
export class Customer_group_translationCreateOrConnectWithoutLanguageInput {
  @TypeGraphQL.Field(_type => Customer_group_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Customer_group_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Customer_group_translationCreateWithoutLanguageInput, {
    nullable: false
  })
  create!: Customer_group_translationCreateWithoutLanguageInput;
}
