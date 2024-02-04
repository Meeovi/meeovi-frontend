import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_templateScalarWhereInput } from "../inputs/App_templateScalarWhereInput";
import { App_templateUpdateManyMutationInput } from "../inputs/App_templateUpdateManyMutationInput";

@TypeGraphQL.InputType("App_templateUpdateManyWithWhereWithoutAppInput", {})
export class App_templateUpdateManyWithWhereWithoutAppInput {
  @TypeGraphQL.Field(_type => App_templateScalarWhereInput, {
    nullable: false
  })
  where!: App_templateScalarWhereInput;

  @TypeGraphQL.Field(_type => App_templateUpdateManyMutationInput, {
    nullable: false
  })
  data!: App_templateUpdateManyMutationInput;
}
