import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutProduct_translationInput } from "../inputs/LanguageCreateWithoutProduct_translationInput";
import { LanguageUpdateWithoutProduct_translationInput } from "../inputs/LanguageUpdateWithoutProduct_translationInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpsertWithoutProduct_translationInput", {})
export class LanguageUpsertWithoutProduct_translationInput {
  @TypeGraphQL.Field(_type => LanguageUpdateWithoutProduct_translationInput, {
    nullable: false
  })
  update!: LanguageUpdateWithoutProduct_translationInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutProduct_translationInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutProduct_translationInput;

  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;
}
