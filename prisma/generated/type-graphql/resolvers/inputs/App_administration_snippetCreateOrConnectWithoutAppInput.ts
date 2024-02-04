import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_administration_snippetCreateWithoutAppInput } from "../inputs/App_administration_snippetCreateWithoutAppInput";
import { App_administration_snippetWhereUniqueInput } from "../inputs/App_administration_snippetWhereUniqueInput";

@TypeGraphQL.InputType("App_administration_snippetCreateOrConnectWithoutAppInput", {})
export class App_administration_snippetCreateOrConnectWithoutAppInput {
  @TypeGraphQL.Field(_type => App_administration_snippetWhereUniqueInput, {
    nullable: false
  })
  where!: App_administration_snippetWhereUniqueInput;

  @TypeGraphQL.Field(_type => App_administration_snippetCreateWithoutAppInput, {
    nullable: false
  })
  create!: App_administration_snippetCreateWithoutAppInput;
}
