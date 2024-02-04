import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_translationCreateManyLanguageInput } from "../inputs/App_translationCreateManyLanguageInput";

@TypeGraphQL.InputType("App_translationCreateManyLanguageInputEnvelope", {})
export class App_translationCreateManyLanguageInputEnvelope {
  @TypeGraphQL.Field(_type => [App_translationCreateManyLanguageInput], {
    nullable: false
  })
  data!: App_translationCreateManyLanguageInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
