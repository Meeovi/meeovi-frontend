import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocaleCreateWithoutApp_administration_snippetInput } from "../inputs/LocaleCreateWithoutApp_administration_snippetInput";
import { LocaleUpdateWithoutApp_administration_snippetInput } from "../inputs/LocaleUpdateWithoutApp_administration_snippetInput";
import { LocaleWhereInput } from "../inputs/LocaleWhereInput";

@TypeGraphQL.InputType("LocaleUpsertWithoutApp_administration_snippetInput", {})
export class LocaleUpsertWithoutApp_administration_snippetInput {
  @TypeGraphQL.Field(_type => LocaleUpdateWithoutApp_administration_snippetInput, {
    nullable: false
  })
  update!: LocaleUpdateWithoutApp_administration_snippetInput;

  @TypeGraphQL.Field(_type => LocaleCreateWithoutApp_administration_snippetInput, {
    nullable: false
  })
  create!: LocaleCreateWithoutApp_administration_snippetInput;

  @TypeGraphQL.Field(_type => LocaleWhereInput, {
    nullable: true
  })
  where?: LocaleWhereInput | undefined;
}
