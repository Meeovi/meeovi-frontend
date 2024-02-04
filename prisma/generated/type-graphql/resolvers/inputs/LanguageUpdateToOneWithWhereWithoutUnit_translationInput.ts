import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageUpdateWithoutUnit_translationInput } from "../inputs/LanguageUpdateWithoutUnit_translationInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpdateToOneWithWhereWithoutUnit_translationInput", {})
export class LanguageUpdateToOneWithWhereWithoutUnit_translationInput {
  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateWithoutUnit_translationInput, {
    nullable: false
  })
  data!: LanguageUpdateWithoutUnit_translationInput;
}
