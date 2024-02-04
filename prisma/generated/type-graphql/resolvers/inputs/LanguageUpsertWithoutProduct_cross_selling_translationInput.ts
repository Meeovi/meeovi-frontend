import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutProduct_cross_selling_translationInput } from "../inputs/LanguageCreateWithoutProduct_cross_selling_translationInput";
import { LanguageUpdateWithoutProduct_cross_selling_translationInput } from "../inputs/LanguageUpdateWithoutProduct_cross_selling_translationInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpsertWithoutProduct_cross_selling_translationInput", {})
export class LanguageUpsertWithoutProduct_cross_selling_translationInput {
  @TypeGraphQL.Field(_type => LanguageUpdateWithoutProduct_cross_selling_translationInput, {
    nullable: false
  })
  update!: LanguageUpdateWithoutProduct_cross_selling_translationInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutProduct_cross_selling_translationInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutProduct_cross_selling_translationInput;

  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;
}
