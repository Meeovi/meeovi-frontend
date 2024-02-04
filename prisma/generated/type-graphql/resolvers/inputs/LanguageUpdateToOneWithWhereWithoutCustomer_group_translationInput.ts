import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageUpdateWithoutCustomer_group_translationInput } from "../inputs/LanguageUpdateWithoutCustomer_group_translationInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpdateToOneWithWhereWithoutCustomer_group_translationInput", {})
export class LanguageUpdateToOneWithWhereWithoutCustomer_group_translationInput {
  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateWithoutCustomer_group_translationInput, {
    nullable: false
  })
  data!: LanguageUpdateWithoutCustomer_group_translationInput;
}
