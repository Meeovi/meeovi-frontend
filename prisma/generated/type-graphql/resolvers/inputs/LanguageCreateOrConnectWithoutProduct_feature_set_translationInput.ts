import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutProduct_feature_set_translationInput } from "../inputs/LanguageCreateWithoutProduct_feature_set_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateOrConnectWithoutProduct_feature_set_translationInput", {})
export class LanguageCreateOrConnectWithoutProduct_feature_set_translationInput {
  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: false
  })
  where!: LanguageWhereUniqueInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutProduct_feature_set_translationInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutProduct_feature_set_translationInput;
}
