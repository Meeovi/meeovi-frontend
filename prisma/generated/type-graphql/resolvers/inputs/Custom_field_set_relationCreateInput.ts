import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Custom_field_setCreateNestedOneWithoutCustom_field_set_relationInput } from "../inputs/Custom_field_setCreateNestedOneWithoutCustom_field_set_relationInput";

@TypeGraphQL.InputType("Custom_field_set_relationCreateInput", {})
export class Custom_field_set_relationCreateInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  entity_name!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Custom_field_setCreateNestedOneWithoutCustom_field_set_relationInput, {
    nullable: false
  })
  custom_field_set!: Custom_field_setCreateNestedOneWithoutCustom_field_set_relationInput;
}
