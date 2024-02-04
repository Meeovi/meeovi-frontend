import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutProduct_sorting_translationInput } from "../inputs/LanguageCreateWithoutProduct_sorting_translationInput";
import { LanguageUpdateWithoutProduct_sorting_translationInput } from "../inputs/LanguageUpdateWithoutProduct_sorting_translationInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpsertWithoutProduct_sorting_translationInput", {})
export class LanguageUpsertWithoutProduct_sorting_translationInput {
  @TypeGraphQL.Field(_type => LanguageUpdateWithoutProduct_sorting_translationInput, {
    nullable: false
  })
  update!: LanguageUpdateWithoutProduct_sorting_translationInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutProduct_sorting_translationInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutProduct_sorting_translationInput;

  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;
}
