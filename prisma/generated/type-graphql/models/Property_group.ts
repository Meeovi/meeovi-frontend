import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Property_group_option } from "../models/Property_group_option";
import { Property_group_translation } from "../models/Property_group_translation";
import { Property_groupCount } from "../resolvers/outputs/Property_groupCount";

@TypeGraphQL.ObjectType("Property_group", {})
export class Property_group {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  sorting_type!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  display_type!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  filterable!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  visible_on_product_detail_page?: boolean | null;

  property_group_option?: Property_group_option[];

  property_group_translation?: Property_group_translation[];

  @TypeGraphQL.Field(_type => Property_groupCount, {
    nullable: true
  })
  _count?: Property_groupCount | null;
}
