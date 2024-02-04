import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_cms_blockCreateManyAppInput } from "../inputs/App_cms_blockCreateManyAppInput";

@TypeGraphQL.InputType("App_cms_blockCreateManyAppInputEnvelope", {})
export class App_cms_blockCreateManyAppInputEnvelope {
  @TypeGraphQL.Field(_type => [App_cms_blockCreateManyAppInput], {
    nullable: false
  })
  data!: App_cms_blockCreateManyAppInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
