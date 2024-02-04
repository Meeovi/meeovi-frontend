import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutCustomer_group_translationInput } from "../inputs/LanguageCreateWithoutCustomer_group_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateOrConnectWithoutCustomer_group_translationInput", {})
export class LanguageCreateOrConnectWithoutCustomer_group_translationInput {
  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: false
  })
  where!: LanguageWhereUniqueInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutCustomer_group_translationInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutCustomer_group_translationInput;
}
