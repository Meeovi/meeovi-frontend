import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_action_button_translationCreateManyApp_action_buttonInput } from "../inputs/App_action_button_translationCreateManyApp_action_buttonInput";

@TypeGraphQL.InputType("App_action_button_translationCreateManyApp_action_buttonInputEnvelope", {})
export class App_action_button_translationCreateManyApp_action_buttonInputEnvelope {
  @TypeGraphQL.Field(_type => [App_action_button_translationCreateManyApp_action_buttonInput], {
    nullable: false
  })
  data!: App_action_button_translationCreateManyApp_action_buttonInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
