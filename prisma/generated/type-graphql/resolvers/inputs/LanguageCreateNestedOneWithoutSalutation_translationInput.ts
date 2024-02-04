import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutSalutation_translationInput } from "../inputs/LanguageCreateOrConnectWithoutSalutation_translationInput";
import { LanguageCreateWithoutSalutation_translationInput } from "../inputs/LanguageCreateWithoutSalutation_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateNestedOneWithoutSalutation_translationInput", {})
export class LanguageCreateNestedOneWithoutSalutation_translationInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutSalutation_translationInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutSalutation_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutSalutation_translationInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutSalutation_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;
}
