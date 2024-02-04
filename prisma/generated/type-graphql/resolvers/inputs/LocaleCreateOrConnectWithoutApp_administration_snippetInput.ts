import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocaleCreateWithoutApp_administration_snippetInput } from "../inputs/LocaleCreateWithoutApp_administration_snippetInput";
import { LocaleWhereUniqueInput } from "../inputs/LocaleWhereUniqueInput";

@TypeGraphQL.InputType("LocaleCreateOrConnectWithoutApp_administration_snippetInput", {})
export class LocaleCreateOrConnectWithoutApp_administration_snippetInput {
  @TypeGraphQL.Field(_type => LocaleWhereUniqueInput, {
    nullable: false
  })
  where!: LocaleWhereUniqueInput;

  @TypeGraphQL.Field(_type => LocaleCreateWithoutApp_administration_snippetInput, {
    nullable: false
  })
  create!: LocaleCreateWithoutApp_administration_snippetInput;
}
