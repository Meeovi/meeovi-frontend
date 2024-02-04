import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Custom_field_setCreateManyAppInput } from "../inputs/Custom_field_setCreateManyAppInput";

@TypeGraphQL.InputType("Custom_field_setCreateManyAppInputEnvelope", {})
export class Custom_field_setCreateManyAppInputEnvelope {
  @TypeGraphQL.Field(_type => [Custom_field_setCreateManyAppInput], {
    nullable: false
  })
  data!: Custom_field_setCreateManyAppInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
