import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_administration_snippetUpdateWithoutLocaleInput } from "../inputs/App_administration_snippetUpdateWithoutLocaleInput";
import { App_administration_snippetWhereUniqueInput } from "../inputs/App_administration_snippetWhereUniqueInput";

@TypeGraphQL.InputType("App_administration_snippetUpdateWithWhereUniqueWithoutLocaleInput", {})
export class App_administration_snippetUpdateWithWhereUniqueWithoutLocaleInput {
  @TypeGraphQL.Field(_type => App_administration_snippetWhereUniqueInput, {
    nullable: false
  })
  where!: App_administration_snippetWhereUniqueInput;

  @TypeGraphQL.Field(_type => App_administration_snippetUpdateWithoutLocaleInput, {
    nullable: false
  })
  data!: App_administration_snippetUpdateWithoutLocaleInput;
}
