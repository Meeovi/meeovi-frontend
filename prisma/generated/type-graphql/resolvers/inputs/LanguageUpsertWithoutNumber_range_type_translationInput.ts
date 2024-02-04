import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutNumber_range_type_translationInput } from "../inputs/LanguageCreateWithoutNumber_range_type_translationInput";
import { LanguageUpdateWithoutNumber_range_type_translationInput } from "../inputs/LanguageUpdateWithoutNumber_range_type_translationInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpsertWithoutNumber_range_type_translationInput", {})
export class LanguageUpsertWithoutNumber_range_type_translationInput {
  @TypeGraphQL.Field(_type => LanguageUpdateWithoutNumber_range_type_translationInput, {
    nullable: false
  })
  update!: LanguageUpdateWithoutNumber_range_type_translationInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutNumber_range_type_translationInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutNumber_range_type_translationInput;

  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;
}
