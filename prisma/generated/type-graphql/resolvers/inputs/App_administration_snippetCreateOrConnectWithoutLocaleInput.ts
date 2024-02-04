import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_administration_snippetCreateWithoutLocaleInput } from "../inputs/App_administration_snippetCreateWithoutLocaleInput";
import { App_administration_snippetWhereUniqueInput } from "../inputs/App_administration_snippetWhereUniqueInput";

@TypeGraphQL.InputType("App_administration_snippetCreateOrConnectWithoutLocaleInput", {})
export class App_administration_snippetCreateOrConnectWithoutLocaleInput {
  @TypeGraphQL.Field(_type => App_administration_snippetWhereUniqueInput, {
    nullable: false
  })
  where!: App_administration_snippetWhereUniqueInput;

  @TypeGraphQL.Field(_type => App_administration_snippetCreateWithoutLocaleInput, {
    nullable: false
  })
  create!: App_administration_snippetCreateWithoutLocaleInput;
}
