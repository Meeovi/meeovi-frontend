import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Custom_fieldCreateManyCustom_field_setInput } from "../inputs/Custom_fieldCreateManyCustom_field_setInput";

@TypeGraphQL.InputType("Custom_fieldCreateManyCustom_field_setInputEnvelope", {})
export class Custom_fieldCreateManyCustom_field_setInputEnvelope {
  @TypeGraphQL.Field(_type => [Custom_fieldCreateManyCustom_field_setInput], {
    nullable: false
  })
  data!: Custom_fieldCreateManyCustom_field_setInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
