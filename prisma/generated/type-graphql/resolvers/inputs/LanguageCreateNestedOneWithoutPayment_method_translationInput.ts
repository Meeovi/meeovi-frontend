import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutPayment_method_translationInput } from "../inputs/LanguageCreateOrConnectWithoutPayment_method_translationInput";
import { LanguageCreateWithoutPayment_method_translationInput } from "../inputs/LanguageCreateWithoutPayment_method_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateNestedOneWithoutPayment_method_translationInput", {})
export class LanguageCreateNestedOneWithoutPayment_method_translationInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutPayment_method_translationInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutPayment_method_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutPayment_method_translationInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutPayment_method_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;
}
