import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutProduct_manufacturer_translationInput } from "../inputs/LanguageCreateWithoutProduct_manufacturer_translationInput";
import { LanguageUpdateWithoutProduct_manufacturer_translationInput } from "../inputs/LanguageUpdateWithoutProduct_manufacturer_translationInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpsertWithoutProduct_manufacturer_translationInput", {})
export class LanguageUpsertWithoutProduct_manufacturer_translationInput {
  @TypeGraphQL.Field(_type => LanguageUpdateWithoutProduct_manufacturer_translationInput, {
    nullable: false
  })
  update!: LanguageUpdateWithoutProduct_manufacturer_translationInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutProduct_manufacturer_translationInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutProduct_manufacturer_translationInput;

  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;
}
