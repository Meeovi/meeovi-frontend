import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";

@TypeGraphQL.ObjectType("App_config", {})
export class App_config {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  key!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  value!: string;
}
