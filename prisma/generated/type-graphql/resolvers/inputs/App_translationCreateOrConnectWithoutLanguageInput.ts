import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_translationCreateWithoutLanguageInput } from "../inputs/App_translationCreateWithoutLanguageInput";
import { App_translationWhereUniqueInput } from "../inputs/App_translationWhereUniqueInput";

@TypeGraphQL.InputType("App_translationCreateOrConnectWithoutLanguageInput", {})
export class App_translationCreateOrConnectWithoutLanguageInput {
  @TypeGraphQL.Field(_type => App_translationWhereUniqueInput, {
    nullable: false
  })
  where!: App_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => App_translationCreateWithoutLanguageInput, {
    nullable: false
  })
  create!: App_translationCreateWithoutLanguageInput;
}
