import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_templateCreateManyAppInput } from "../inputs/App_templateCreateManyAppInput";

@TypeGraphQL.InputType("App_templateCreateManyAppInputEnvelope", {})
export class App_templateCreateManyAppInputEnvelope {
  @TypeGraphQL.Field(_type => [App_templateCreateManyAppInput], {
    nullable: false
  })
  data!: App_templateCreateManyAppInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
