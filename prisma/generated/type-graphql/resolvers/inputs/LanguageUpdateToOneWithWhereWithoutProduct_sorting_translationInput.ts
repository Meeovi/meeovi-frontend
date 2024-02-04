import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageUpdateWithoutProduct_sorting_translationInput } from "../inputs/LanguageUpdateWithoutProduct_sorting_translationInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpdateToOneWithWhereWithoutProduct_sorting_translationInput", {})
export class LanguageUpdateToOneWithWhereWithoutProduct_sorting_translationInput {
  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateWithoutProduct_sorting_translationInput, {
    nullable: false
  })
  data!: LanguageUpdateWithoutProduct_sorting_translationInput;
}
