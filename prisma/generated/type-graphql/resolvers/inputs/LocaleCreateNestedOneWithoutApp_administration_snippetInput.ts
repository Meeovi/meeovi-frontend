import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocaleCreateOrConnectWithoutApp_administration_snippetInput } from "../inputs/LocaleCreateOrConnectWithoutApp_administration_snippetInput";
import { LocaleCreateWithoutApp_administration_snippetInput } from "../inputs/LocaleCreateWithoutApp_administration_snippetInput";
import { LocaleWhereUniqueInput } from "../inputs/LocaleWhereUniqueInput";

@TypeGraphQL.InputType("LocaleCreateNestedOneWithoutApp_administration_snippetInput", {})
export class LocaleCreateNestedOneWithoutApp_administration_snippetInput {
  @TypeGraphQL.Field(_type => LocaleCreateWithoutApp_administration_snippetInput, {
    nullable: true
  })
  create?: LocaleCreateWithoutApp_administration_snippetInput | undefined;

  @TypeGraphQL.Field(_type => LocaleCreateOrConnectWithoutApp_administration_snippetInput, {
    nullable: true
  })
  connectOrCreate?: LocaleCreateOrConnectWithoutApp_administration_snippetInput | undefined;

  @TypeGraphQL.Field(_type => LocaleWhereUniqueInput, {
    nullable: true
  })
  connect?: LocaleWhereUniqueInput | undefined;
}
