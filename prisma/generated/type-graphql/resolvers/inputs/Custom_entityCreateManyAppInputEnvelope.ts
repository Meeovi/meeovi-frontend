import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Custom_entityCreateManyAppInput } from "../inputs/Custom_entityCreateManyAppInput";

@TypeGraphQL.InputType("Custom_entityCreateManyAppInputEnvelope", {})
export class Custom_entityCreateManyAppInputEnvelope {
  @TypeGraphQL.Field(_type => [Custom_entityCreateManyAppInput], {
    nullable: false
  })
  data!: Custom_entityCreateManyAppInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
