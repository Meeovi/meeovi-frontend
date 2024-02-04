import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_templateUpdateWithoutAppInput } from "../inputs/App_templateUpdateWithoutAppInput";
import { App_templateWhereUniqueInput } from "../inputs/App_templateWhereUniqueInput";

@TypeGraphQL.InputType("App_templateUpdateWithWhereUniqueWithoutAppInput", {})
export class App_templateUpdateWithWhereUniqueWithoutAppInput {
  @TypeGraphQL.Field(_type => App_templateWhereUniqueInput, {
    nullable: false
  })
  where!: App_templateWhereUniqueInput;

  @TypeGraphQL.Field(_type => App_templateUpdateWithoutAppInput, {
    nullable: false
  })
  data!: App_templateUpdateWithoutAppInput;
}
