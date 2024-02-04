import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageUpdateWithoutCategory_translationInput } from "../inputs/LanguageUpdateWithoutCategory_translationInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpdateToOneWithWhereWithoutCategory_translationInput", {})
export class LanguageUpdateToOneWithWhereWithoutCategory_translationInput {
  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateWithoutCategory_translationInput, {
    nullable: false
  })
  data!: LanguageUpdateWithoutCategory_translationInput;
}
