import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutPromotion_translationInput } from "../inputs/LanguageCreateWithoutPromotion_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateOrConnectWithoutPromotion_translationInput", {})
export class LanguageCreateOrConnectWithoutPromotion_translationInput {
  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: false
  })
  where!: LanguageWhereUniqueInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutPromotion_translationInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutPromotion_translationInput;
}
