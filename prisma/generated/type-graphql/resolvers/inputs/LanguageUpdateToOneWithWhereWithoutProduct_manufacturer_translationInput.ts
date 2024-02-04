import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageUpdateWithoutProduct_manufacturer_translationInput } from "../inputs/LanguageUpdateWithoutProduct_manufacturer_translationInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpdateToOneWithWhereWithoutProduct_manufacturer_translationInput", {})
export class LanguageUpdateToOneWithWhereWithoutProduct_manufacturer_translationInput {
  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateWithoutProduct_manufacturer_translationInput, {
    nullable: false
  })
  data!: LanguageUpdateWithoutProduct_manufacturer_translationInput;
}
