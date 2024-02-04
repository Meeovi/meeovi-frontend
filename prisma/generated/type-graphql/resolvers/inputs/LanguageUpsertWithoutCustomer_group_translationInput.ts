import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutCustomer_group_translationInput } from "../inputs/LanguageCreateWithoutCustomer_group_translationInput";
import { LanguageUpdateWithoutCustomer_group_translationInput } from "../inputs/LanguageUpdateWithoutCustomer_group_translationInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpsertWithoutCustomer_group_translationInput", {})
export class LanguageUpsertWithoutCustomer_group_translationInput {
  @TypeGraphQL.Field(_type => LanguageUpdateWithoutCustomer_group_translationInput, {
    nullable: false
  })
  update!: LanguageUpdateWithoutCustomer_group_translationInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutCustomer_group_translationInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutCustomer_group_translationInput;

  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;
}
