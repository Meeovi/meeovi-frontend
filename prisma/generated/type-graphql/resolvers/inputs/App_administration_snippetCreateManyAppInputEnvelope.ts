import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_administration_snippetCreateManyAppInput } from "../inputs/App_administration_snippetCreateManyAppInput";

@TypeGraphQL.InputType("App_administration_snippetCreateManyAppInputEnvelope", {})
export class App_administration_snippetCreateManyAppInputEnvelope {
  @TypeGraphQL.Field(_type => [App_administration_snippetCreateManyAppInput], {
    nullable: false
  })
  data!: App_administration_snippetCreateManyAppInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
