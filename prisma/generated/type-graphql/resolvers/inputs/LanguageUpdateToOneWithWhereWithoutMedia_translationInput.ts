import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageUpdateWithoutMedia_translationInput } from "../inputs/LanguageUpdateWithoutMedia_translationInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpdateToOneWithWhereWithoutMedia_translationInput", {})
export class LanguageUpdateToOneWithWhereWithoutMedia_translationInput {
  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateWithoutMedia_translationInput, {
    nullable: false
  })
  data!: LanguageUpdateWithoutMedia_translationInput;
}
