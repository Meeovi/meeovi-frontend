import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutPromotion_translationInput } from "../inputs/LanguageCreateWithoutPromotion_translationInput";
import { LanguageUpdateWithoutPromotion_translationInput } from "../inputs/LanguageUpdateWithoutPromotion_translationInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpsertWithoutPromotion_translationInput", {})
export class LanguageUpsertWithoutPromotion_translationInput {
  @TypeGraphQL.Field(_type => LanguageUpdateWithoutPromotion_translationInput, {
    nullable: false
  })
  update!: LanguageUpdateWithoutPromotion_translationInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutPromotion_translationInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutPromotion_translationInput;

  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;
}
