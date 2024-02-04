import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Media } from "../models/Media";
import { Product_configurator_setting } from "../models/Product_configurator_setting";
import { Product_option } from "../models/Product_option";
import { Product_property } from "../models/Product_property";
import { Property_group } from "../models/Property_group";
import { Property_group_option_translation } from "../models/Property_group_option_translation";
import { Property_group_optionCount } from "../resolvers/outputs/Property_group_optionCount";

@TypeGraphQL.ObjectType("Property_group_option", {})
export class Property_group_option {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  property_group_id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  color_hex_code?: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  media_id?: Buffer | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  product_configurator_setting?: Product_configurator_setting[];

  product_option?: Product_option[];

  product_property?: Product_property[];

  media?: Media | null;

  property_group?: Property_group;

  property_group_option_translation?: Property_group_option_translation[];

  @TypeGraphQL.Field(_type => Property_group_optionCount, {
    nullable: true
  })
  _count?: Property_group_optionCount | null;
}
