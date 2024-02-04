import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Sales_channel } from "../models/Sales_channel";
import { Sales_channel_analyticsCount } from "../resolvers/outputs/Sales_channel_analyticsCount";

@TypeGraphQL.ObjectType("Sales_channel_analytics", {})
export class Sales_channel_analytics {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  tracking_id!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  active!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  track_orders!: boolean;

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
  anonymize_ip!: boolean;

  sales_channel?: Sales_channel[];

  @TypeGraphQL.Field(_type => Sales_channel_analyticsCount, {
    nullable: true
  })
  _count?: Sales_channel_analyticsCount | null;
}
