import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Custom_field_set_relationCreateManyCustom_field_setInput } from "../inputs/Custom_field_set_relationCreateManyCustom_field_setInput";

@TypeGraphQL.InputType("Custom_field_set_relationCreateManyCustom_field_setInputEnvelope", {})
export class Custom_field_set_relationCreateManyCustom_field_setInputEnvelope {
  @TypeGraphQL.Field(_type => [Custom_field_set_relationCreateManyCustom_field_setInput], {
    nullable: false
  })
  data!: Custom_field_set_relationCreateManyCustom_field_setInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
