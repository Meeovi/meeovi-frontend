import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutProduct_cross_selling_translationInput } from "../inputs/LanguageCreateWithoutProduct_cross_selling_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateOrConnectWithoutProduct_cross_selling_translationInput", {})
export class LanguageCreateOrConnectWithoutProduct_cross_selling_translationInput {
  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: false
  })
  where!: LanguageWhereUniqueInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutProduct_cross_selling_translationInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutProduct_cross_selling_translationInput;
}
