import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutPayment_method_translationInput } from "../inputs/LanguageCreateWithoutPayment_method_translationInput";
import { LanguageUpdateWithoutPayment_method_translationInput } from "../inputs/LanguageUpdateWithoutPayment_method_translationInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpsertWithoutPayment_method_translationInput", {})
export class LanguageUpsertWithoutPayment_method_translationInput {
  @TypeGraphQL.Field(_type => LanguageUpdateWithoutPayment_method_translationInput, {
    nullable: false
  })
  update!: LanguageUpdateWithoutPayment_method_translationInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutPayment_method_translationInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutPayment_method_translationInput;

  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;
}
