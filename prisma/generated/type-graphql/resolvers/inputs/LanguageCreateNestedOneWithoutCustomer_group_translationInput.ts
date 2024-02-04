import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutCustomer_group_translationInput } from "../inputs/LanguageCreateOrConnectWithoutCustomer_group_translationInput";
import { LanguageCreateWithoutCustomer_group_translationInput } from "../inputs/LanguageCreateWithoutCustomer_group_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateNestedOneWithoutCustomer_group_translationInput", {})
export class LanguageCreateNestedOneWithoutCustomer_group_translationInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutCustomer_group_translationInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutCustomer_group_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutCustomer_group_translationInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutCustomer_group_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;
}
