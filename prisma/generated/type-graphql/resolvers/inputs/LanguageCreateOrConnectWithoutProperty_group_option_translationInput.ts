import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutProperty_group_option_translationInput } from "../inputs/LanguageCreateWithoutProperty_group_option_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateOrConnectWithoutProperty_group_option_translationInput", {})
export class LanguageCreateOrConnectWithoutProperty_group_option_translationInput {
  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: false
  })
  where!: LanguageWhereUniqueInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutProperty_group_option_translationInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutProperty_group_option_translationInput;
}
