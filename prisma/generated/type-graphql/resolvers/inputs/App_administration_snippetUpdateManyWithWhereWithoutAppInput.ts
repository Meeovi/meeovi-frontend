import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_administration_snippetScalarWhereInput } from "../inputs/App_administration_snippetScalarWhereInput";
import { App_administration_snippetUpdateManyMutationInput } from "../inputs/App_administration_snippetUpdateManyMutationInput";

@TypeGraphQL.InputType("App_administration_snippetUpdateManyWithWhereWithoutAppInput", {})
export class App_administration_snippetUpdateManyWithWhereWithoutAppInput {
  @TypeGraphQL.Field(_type => App_administration_snippetScalarWhereInput, {
    nullable: false
  })
  where!: App_administration_snippetScalarWhereInput;

  @TypeGraphQL.Field(_type => App_administration_snippetUpdateManyMutationInput, {
    nullable: false
  })
  data!: App_administration_snippetUpdateManyMutationInput;
}
