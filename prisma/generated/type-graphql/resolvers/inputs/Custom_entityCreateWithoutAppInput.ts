import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateNestedManyWithoutCustom_entityInput } from "../inputs/CategoryCreateNestedManyWithoutCustom_entityInput";
import { PluginCreateNestedOneWithoutCustom_entityInput } from "../inputs/PluginCreateNestedOneWithoutCustom_entityInput";

@TypeGraphQL.InputType("Custom_entityCreateWithoutAppInput", {})
export class Custom_entityCreateWithoutAppInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  fields!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  flags?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  custom_fields_aware?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  label_property?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  deleted_at?: Date | undefined;

  @TypeGraphQL.Field(_type => CategoryCreateNestedManyWithoutCustom_entityInput, {
    nullable: true
  })
  category?: CategoryCreateNestedManyWithoutCustom_entityInput | undefined;

  @TypeGraphQL.Field(_type => PluginCreateNestedOneWithoutCustom_entityInput, {
    nullable: true
  })
  plugin?: PluginCreateNestedOneWithoutCustom_entityInput | undefined;
}
