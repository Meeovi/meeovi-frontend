import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutProperty_group_translationInput } from "../inputs/LanguageCreateOrConnectWithoutProperty_group_translationInput";
import { LanguageCreateWithoutProperty_group_translationInput } from "../inputs/LanguageCreateWithoutProperty_group_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateNestedOneWithoutProperty_group_translationInput", {})
export class LanguageCreateNestedOneWithoutProperty_group_translationInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutProperty_group_translationInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutProperty_group_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutProperty_group_translationInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutProperty_group_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;
}
