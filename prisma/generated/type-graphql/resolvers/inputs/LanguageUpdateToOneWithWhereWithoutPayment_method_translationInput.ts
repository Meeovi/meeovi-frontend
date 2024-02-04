import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageUpdateWithoutPayment_method_translationInput } from "../inputs/LanguageUpdateWithoutPayment_method_translationInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpdateToOneWithWhereWithoutPayment_method_translationInput", {})
export class LanguageUpdateToOneWithWhereWithoutPayment_method_translationInput {
  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateWithoutPayment_method_translationInput, {
    nullable: false
  })
  data!: LanguageUpdateWithoutPayment_method_translationInput;
}
