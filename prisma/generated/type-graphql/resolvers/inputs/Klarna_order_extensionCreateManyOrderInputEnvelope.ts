import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Klarna_order_extensionCreateManyOrderInput } from "../inputs/Klarna_order_extensionCreateManyOrderInput";

@TypeGraphQL.InputType("Klarna_order_extensionCreateManyOrderInputEnvelope", {})
export class Klarna_order_extensionCreateManyOrderInputEnvelope {
  @TypeGraphQL.Field(_type => [Klarna_order_extensionCreateManyOrderInput], {
    nullable: false
  })
  data!: Klarna_order_extensionCreateManyOrderInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
