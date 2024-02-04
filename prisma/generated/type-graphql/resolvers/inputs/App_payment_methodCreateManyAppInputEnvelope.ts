import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_payment_methodCreateManyAppInput } from "../inputs/App_payment_methodCreateManyAppInput";

@TypeGraphQL.InputType("App_payment_methodCreateManyAppInputEnvelope", {})
export class App_payment_methodCreateManyAppInputEnvelope {
  @TypeGraphQL.Field(_type => [App_payment_methodCreateManyAppInput], {
    nullable: false
  })
  data!: App_payment_methodCreateManyAppInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
