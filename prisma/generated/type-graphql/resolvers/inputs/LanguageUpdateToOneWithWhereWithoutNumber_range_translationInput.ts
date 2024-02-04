import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageUpdateWithoutNumber_range_translationInput } from "../inputs/LanguageUpdateWithoutNumber_range_translationInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpdateToOneWithWhereWithoutNumber_range_translationInput", {})
export class LanguageUpdateToOneWithWhereWithoutNumber_range_translationInput {
  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateWithoutNumber_range_translationInput, {
    nullable: false
  })
  data!: LanguageUpdateWithoutNumber_range_translationInput;
}
