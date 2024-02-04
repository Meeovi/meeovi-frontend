import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_administration_snippetCreateManyLocaleInput } from "../inputs/App_administration_snippetCreateManyLocaleInput";

@TypeGraphQL.InputType("App_administration_snippetCreateManyLocaleInputEnvelope", {})
export class App_administration_snippetCreateManyLocaleInputEnvelope {
  @TypeGraphQL.Field(_type => [App_administration_snippetCreateManyLocaleInput], {
    nullable: false
  })
  data!: App_administration_snippetCreateManyLocaleInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
