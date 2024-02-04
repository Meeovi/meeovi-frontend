import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_flow_action_translationCreateManyLanguageInput } from "../inputs/App_flow_action_translationCreateManyLanguageInput";

@TypeGraphQL.InputType("App_flow_action_translationCreateManyLanguageInputEnvelope", {})
export class App_flow_action_translationCreateManyLanguageInputEnvelope {
  @TypeGraphQL.Field(_type => [App_flow_action_translationCreateManyLanguageInput], {
    nullable: false
  })
  data!: App_flow_action_translationCreateManyLanguageInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
