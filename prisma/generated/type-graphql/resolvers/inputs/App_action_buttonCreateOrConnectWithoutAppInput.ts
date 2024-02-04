import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_action_buttonCreateWithoutAppInput } from "../inputs/App_action_buttonCreateWithoutAppInput";
import { App_action_buttonWhereUniqueInput } from "../inputs/App_action_buttonWhereUniqueInput";

@TypeGraphQL.InputType("App_action_buttonCreateOrConnectWithoutAppInput", {})
export class App_action_buttonCreateOrConnectWithoutAppInput {
  @TypeGraphQL.Field(_type => App_action_buttonWhereUniqueInput, {
    nullable: false
  })
  where!: App_action_buttonWhereUniqueInput;

  @TypeGraphQL.Field(_type => App_action_buttonCreateWithoutAppInput, {
    nullable: false
  })
  create!: App_action_buttonCreateWithoutAppInput;
}
