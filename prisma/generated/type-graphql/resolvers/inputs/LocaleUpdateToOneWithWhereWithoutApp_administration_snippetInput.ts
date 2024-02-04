import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocaleUpdateWithoutApp_administration_snippetInput } from "../inputs/LocaleUpdateWithoutApp_administration_snippetInput";
import { LocaleWhereInput } from "../inputs/LocaleWhereInput";

@TypeGraphQL.InputType("LocaleUpdateToOneWithWhereWithoutApp_administration_snippetInput", {})
export class LocaleUpdateToOneWithWhereWithoutApp_administration_snippetInput {
  @TypeGraphQL.Field(_type => LocaleWhereInput, {
    nullable: true
  })
  where?: LocaleWhereInput | undefined;

  @TypeGraphQL.Field(_type => LocaleUpdateWithoutApp_administration_snippetInput, {
    nullable: false
  })
  data!: LocaleUpdateWithoutApp_administration_snippetInput;
}
