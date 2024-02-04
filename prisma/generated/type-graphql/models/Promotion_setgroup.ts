import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Promotion } from "../models/Promotion";
import { Promotion_setgroup_rule } from "../models/Promotion_setgroup_rule";
import { Promotion_setgroupCount } from "../resolvers/outputs/Promotion_setgroupCount";

@TypeGraphQL.ObjectType("Promotion_setgroup", {})
export class Promotion_setgroup {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  promotion_id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  packager_key!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  sorter_key!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  value!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  promotion?: Promotion;

  promotion_setgroup_rule?: Promotion_setgroup_rule[];

  @TypeGraphQL.Field(_type => Promotion_setgroupCount, {
    nullable: true
  })
  _count?: Promotion_setgroupCount | null;
}
