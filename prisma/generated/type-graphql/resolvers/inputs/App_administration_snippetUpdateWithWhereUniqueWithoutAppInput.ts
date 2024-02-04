import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_administration_snippetUpdateWithoutAppInput } from "../inputs/App_administration_snippetUpdateWithoutAppInput";
import { App_administration_snippetWhereUniqueInput } from "../inputs/App_administration_snippetWhereUniqueInput";

@TypeGraphQL.InputType("App_administration_snippetUpdateWithWhereUniqueWithoutAppInput", {})
export class App_administration_snippetUpdateWithWhereUniqueWithoutAppInput {
  @TypeGraphQL.Field(_type => App_administration_snippetWhereUniqueInput, {
    nullable: false
  })
  where!: App_administration_snippetWhereUniqueInput;

  @TypeGraphQL.Field(_type => App_administration_snippetUpdateWithoutAppInput, {
    nullable: false
  })
  data!: App_administration_snippetUpdateWithoutAppInput;
}
