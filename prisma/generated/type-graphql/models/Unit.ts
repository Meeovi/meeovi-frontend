import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Product } from "../models/Product";
import { Unit_translation } from "../models/Unit_translation";
import { UnitCount } from "../resolvers/outputs/UnitCount";

@TypeGraphQL.ObjectType("Unit", {})
export class Unit {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  product?: Product[];

  unit_translation?: Unit_translation[];

  @TypeGraphQL.Field(_type => UnitCount, {
    nullable: true
  })
  _count?: UnitCount | null;
}
