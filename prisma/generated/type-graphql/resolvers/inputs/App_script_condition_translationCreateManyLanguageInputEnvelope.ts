import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_script_condition_translationCreateManyLanguageInput } from "../inputs/App_script_condition_translationCreateManyLanguageInput";

@TypeGraphQL.InputType("App_script_condition_translationCreateManyLanguageInputEnvelope", {})
export class App_script_condition_translationCreateManyLanguageInputEnvelope {
  @TypeGraphQL.Field(_type => [App_script_condition_translationCreateManyLanguageInput], {
    nullable: false
  })
  data!: App_script_condition_translationCreateManyLanguageInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
