import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageUpdateWithoutProduct_cross_selling_translationInput } from "../inputs/LanguageUpdateWithoutProduct_cross_selling_translationInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpdateToOneWithWhereWithoutProduct_cross_selling_translationInput", {})
export class LanguageUpdateToOneWithWhereWithoutProduct_cross_selling_translationInput {
  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateWithoutProduct_cross_selling_translationInput, {
    nullable: false
  })
  data!: LanguageUpdateWithoutProduct_cross_selling_translationInput;
}
