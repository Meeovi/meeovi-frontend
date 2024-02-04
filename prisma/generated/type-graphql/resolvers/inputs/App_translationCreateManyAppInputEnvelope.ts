import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_translationCreateManyAppInput } from "../inputs/App_translationCreateManyAppInput";

@TypeGraphQL.InputType("App_translationCreateManyAppInputEnvelope", {})
export class App_translationCreateManyAppInputEnvelope {
  @TypeGraphQL.Field(_type => [App_translationCreateManyAppInput], {
    nullable: false
  })
  data!: App_translationCreateManyAppInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
