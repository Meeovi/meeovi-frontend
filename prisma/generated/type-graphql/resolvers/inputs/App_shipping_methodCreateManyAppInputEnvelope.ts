import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_shipping_methodCreateManyAppInput } from "../inputs/App_shipping_methodCreateManyAppInput";

@TypeGraphQL.InputType("App_shipping_methodCreateManyAppInputEnvelope", {})
export class App_shipping_methodCreateManyAppInputEnvelope {
  @TypeGraphQL.Field(_type => [App_shipping_methodCreateManyAppInput], {
    nullable: false
  })
  data!: App_shipping_methodCreateManyAppInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
